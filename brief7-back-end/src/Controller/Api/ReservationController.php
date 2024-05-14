<?php

namespace App\Controller\Api;

use App\Entity\Reservation;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[Route('/api/reservation', name: 'api_reservation_')]
class ReservationController extends AbstractController
{
    #[Route('/new', name: 'new', methods: ['POST'])]
    public function new(Request $request, EntityManagerInterface $em, ValidatorInterface $validator, SerializerInterface $serializer): JsonResponse
    {
        $reservation = $serializer->deserialize($request->getContent(), Reservation::class, 'json', ['groups' => 'api_reservation_new']);

        $errors = $validator->validate($reservation);
        if(count($errors) > 0) {
            return $this->json($errors, JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
        } else {
            $em->persist($reservation);
            $em->flush();
            return $this->json(null, JsonResponse::HTTP_CREATED);
        }
    }
}
