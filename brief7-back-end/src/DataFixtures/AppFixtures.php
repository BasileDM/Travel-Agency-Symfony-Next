<?php

namespace App\DataFixtures;

use App\Entity\Category;
use App\Entity\Destination;
use App\Entity\Trip;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture {
    public function load(ObjectManager $manager): void {
        $destinationsArray = [
            'France' => 'Paris',
            'Germany' => 'Berlin',
            'United Kingdom' => 'London',
            'Spain' => 'Madrid',
            'Italy' => 'Rome',
            'Greece' => 'Athens',
            'Portugal' => 'Lisbon',
            'Poland' => 'Warsaw',
            'Czech Republic' => 'Prague',
            'Romania' => 'Bucharest',
        ];

        for ($i = 0; $i < 6; $i++) {
            $destination = new Destination;
            $randDestination = array_rand($destinationsArray, 1);
            $destination->setCountry($randDestination);
            $destination->setCity($destinationsArray[$randDestination]);
            $manager->persist($destination);

            $category = new Category;
            $category->setName('Category ' . $i);
            $manager->persist($category);

            $user = new User;
            $user->setFirstName('userFirst' . $i);
            $user->setLastName('userLast' . $i);
            $user->setEmail('mail' . $i . '@example.com');
            $user->setPassword('password' . $i);
            $user->setRoles(['ROLE_USER']);
            $user->setPhone($i . '123456789');
            $manager->persist($user);

            for ($j = 0; $j < 3; $j++) {
                $trip = new Trip;
                $tripNumber = $j + $i*3;
                $trip->setName('Trip ' . $tripNumber);
                $trip->setDescription('Description for trip number ' . $tripNumber);
                $trip->setStartDate(new \DateTime('now'));
                $trip->setEndDate(new \DateTime('+1 month'));
                $trip->setOwner($user);
                $trip->setDestination($destination);
                $trip->addCategory($category);
                $manager->persist($trip);
            }
        }
        $manager->flush();
    }
}
