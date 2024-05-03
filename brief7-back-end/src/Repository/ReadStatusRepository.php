<?php

namespace App\Repository;

use App\Entity\ReadStatus;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ReadStatus>
 *
 * @method ReadStatus|null find($id, $lockMode = null, $lockVersion = null)
 * @method ReadStatus|null findOneBy(array $criteria, array $orderBy = null)
 * @method ReadStatus[]    findAll()
 * @method ReadStatus[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ReadStatusRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ReadStatus::class);
    }

    //    /**
    //     * @return ReadStatus[] Returns an array of ReadStatus objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('r')
    //            ->andWhere('r.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('r.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?ReadStatus
    //    {
    //        return $this->createQueryBuilder('r')
    //            ->andWhere('r.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
