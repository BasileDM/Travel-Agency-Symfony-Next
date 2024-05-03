<?php

namespace App\Controller\Admin;

use App\Entity\Trip;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;

class TripCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Trip::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            'name',
            'description',
            'start_date',
            'end_date',
            AssociationField::new('category'),
            AssociationField::new('destination'),
            AssociationField::new('owner')->setFormTypeOption('query_builder', function (\Doctrine\ORM\EntityRepository $er) {
                return $er->createQueryBuilder('u')
                    ->where('u.id = :userId')
                    ->setParameter('userId', $this->getUser());
            })
        ];
    }
}
