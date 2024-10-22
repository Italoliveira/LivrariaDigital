<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Order;
use App\Models\Address;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Shipping>
 */
class ShippingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'order_id' => Order::inRandomOrder()->first()->id,
            'adress_id' => Address::inRandomOrder()->first()->id,
            'tracking_number' => $this->faker->optional()->regexify('[A-Z0-9]{10}'),
            'shipped_at' => $this->faker->optional()->dateTimeThisYear(),
            'delivered_at' => $this->faker->optional()->dateTimeThisYear(),
        ];
    }
}
