<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Address;
use App\Models\Category;
use App\Models\Book;
use App\Models\Cart;
use App\Models\CartItems;
use App\Models\Order;
use App\Models\OrderItems;
use App\Models\Payment;
use App\Models\Review;
use App\Models\Shipping;

class UserSeeder extends Seeder
{
    public function run()
    {

        for ($i = 0; $i < 10; $i++) {

            $user = User::factory()->create();

            // Cria endereços relacionados ao usuário
            $addresses = Address::factory(2)->create([
                'user_id' => $user->id,
            ]);
    
            // Cria categorias para livros
            $categories = Category::factory(2)->create();
    
            // Cria livros relacionados às categorias
            Book::factory(5)->create([
                'category_id' => $categories->random()->id,
            ]);
    
            // Cria um carrinho para o usuário
            $cart = Cart::factory()->create([
                'user_id' => $user->id,
            ]);
    
            // Adiciona livros ao carrinho
            $books = Book::inRandomOrder()->take(3)->get();
            foreach ($books as $book) {
                CartItems::factory()->create([
                    'cart_id' => $cart->id,
                    'book_id' => $book->id,
                ]);
            }
    
            // Cria uma ordem para o usuário
            $order = Order::factory()->create([
                'user_id' => $user->id,
            ]);
    
            // Adiciona itens à ordem
            $orderBooks = Book::inRandomOrder()->take(2)->get();
            foreach ($orderBooks as $book) {
                OrderItems::factory()->create([
                    'order_id' => $order->id,
                    'book_id' => $book->id,
                    'price' => $book->price,
                ]);
            }
    
            // Cria o pagamento para o pedido
            Payment::factory()->create([
                'order_id' => $order->id,
            ]);
    
            // Cria o envio para o pedido
            Shipping::factory()->create([
                'order_id' => $order->id,
                'adress_id' => $addresses->first()->id,  // Usa o primeiro endereço criado
            ]);
    
            // Cria avaliações para livros
            Review::factory(2)->create([
                'user_id' => $user->id,
                'book_id' => Book::inRandomOrder()->first()->id,
            ]);
            
        }
    }
}
