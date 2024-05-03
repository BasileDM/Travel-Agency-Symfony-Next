<?php

namespace App\Controller\Api;

use App\Repository\TripRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/trip', name: 'api_trip_')]
class TripController extends AbstractController
{

    #[Route('s', name: 'all', methods: ['GET'])]
    public function index(TripRepository $tripRepository): Response
    {
        $trips = $tripRepository->findAll();
        return $this->json(data: $trips, context: ['groups' => ['api_trip_all']]);
    }

    #[Route('/{name}', name: 'show', methods: ['GET'])]
    public function show($name, TripRepository $tripRepository): Response
    {
        $trips = $tripRepository->findOneBy(['name' => $name]);
        return $this->json(data: $trips, context: ['groups' => ['api_trip_show']]);
    }
}
