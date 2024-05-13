<?php

namespace App\Controller\Api;

use App\Entity\Contact;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[Route('/api/contact', name: 'api_contact_')]
class ContactController extends AbstractController
{
    #[Route('/new', name: 'new', methods: ['POST'])]
    public function new(Request $request, EntityManagerInterface $em, SerializerInterface $serializer, ValidatorInterface $validator): JsonResponse
    {
        $contact = $serializer->deserialize($request->getContent(), Contact::class, 'json', ['groups' => 'api_contact_new']);
        $errors = $validator->validate($contact);

        if (count($errors) > 0) {
            return $this->json($errors, JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
        } else {
            $em->persist($contact);
            $em->flush();
            return $this->json(null, JsonResponse::HTTP_CREATED);
        }
    }
}
