<?php

use Carbon\Carbon;
/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Band::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->unique()->word,
        'start_date' => $faker->dateTimeBetween("-30 years", "-15 years"),
        'website' => $faker->domainName,
        'still_active' => $faker->boolean,
    ];
});

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Album::class, function (Faker\Generator $faker) {
    $band = App\Band::all()->random();
    $band_start_date = new Carbon($band->start_date);
    $recorded_date = $band_start_date->addYears(rand(1, 15));
    return [
        'name' => $faker->unique()->word,
        'band_id' => $band->id,
        'recorded_date' => $recorded_date->format('Y-m-d'),
        'release_date' => $recorded_date->addWeeks(rand(1, 10))->format('Y-m-d'),
        'number_of_tracks' => $faker->numberBetween(1, 50),
        'label' => $faker->word,
        'producer' => $faker->name,
        'genre' => $faker->word,
    ];
});
