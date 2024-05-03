<?php

namespace App\Controller\Api;

use App\Repository\DestinationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/destination', name: 'api_destination_')]
class DestinationController extends AbstractController
{
    #[Route('s', name: 'all', methods: ['GET'])]
    public function index(DestinationRepository $destinationRepo): Response
    {
        $destinations = $destinationRepo->findAll();
        return $this->json(data: $destinations, context: ['groups' => ['api_destination_all']]);
    }
}
