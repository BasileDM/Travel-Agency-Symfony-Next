<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ReservationController extends AbstractController
{
    #[Route('/api/reservation', name: 'app_api_reservation')]
    public function index(): Response
    {
        return $this->render('api/reservation/index.html.twig', [
            'controller_name' => 'ReservationController',
        ]);
    }
}
