<?php

namespace App\Entity;

use App\Repository\CategoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: CategoryRepository::class)]
class Category
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['api_category_all'])]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    #[Groups(['api_trip_all', 'api_trip_show', 'api_category_all'])]
    private ?string $name = null;

    /**
     * @var Collection<int, Trip>
     */
    #[ORM\ManyToMany(targetEntity: Trip::class, mappedBy: 'category')]
    private Collection $trips;

    public function __construct()
    {
        $this->trips = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->name;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection<int, Trip>
     */
    public function getTrips(): Collection
    {
        return $this->trips;
    }

    public function addTrip(Trip $trip): static
    {
        if (!$this->trips->contains($trip)) {
            $this->trips->add($trip);
            $trip->addCategory($this);
        }

        return $this;
    }

    public function removeTrip(Trip $trip): static
    {
        if ($this->trips->removeElement($trip)) {
            $trip->removeCategory($this);
        }

        return $this;
    }
}
