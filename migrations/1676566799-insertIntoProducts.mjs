const products = [
  {
    id: 1,
    product_name: 'santaCruz',
    product_type: 'board',
    type: 'skateboard',
    product_description:
      'The Classic Dot is a team skateboard deck from Santa Cruz with the classic logo 8.25 inches wide, 31.8 inches long, 14.25 inches wheelbase, 6.9 inches nose, 6.48 inches tail Medium concave',
    price: '60.00',
  },
  {
    id: 2,
    product_name: 'element',
    product_type: 'board',
    type: 'skateboard',
    product_description:
      'The Squared 30 is a Donny Barley pro Skateboard deck by Element 8.125 Inch Wide, 31.8 Inch Long, 14.25 Inch Wheelbase Medium Concave. Deck made of 7 layers of Canadian maple. Cold Pressed with water-based glue',
    price: '70.00',
  },
  {
    id: 3,
    product_name: 'baker',
    product_type: 'board',
    type: 'skateboard',
    product_description:
      'Twidth: 8.25" length: 31.875" wheelbase: 14.25" nose: 6.875" tail: 6.5" medium concave standard popsicle shape 7-ply maple construction Brand Logo series',
    price: '80.00',
  },
  {
    id: 4,
    product_name: 'girl',
    product_type: 'board',
    type: 'skateboard',
    product_description:
      'The 93 Til is a Girl Skateboards Pro Model Deck by Andrew Brophy 8.0 Inch Wide, 31.5 Inch Long, 14 Inch Wheelbase, 6.69 Inch Nose, 6.6 Inch Tail Girl decks have a rather flat concave Deck made of 7 layers of Canadian maple, single pressed to guarantee the exact same concave on every deck, epoxy glue',
    price: '68.00',
  },
  {
    id: 5,
    product_name: 'bones',
    product_type: 'wheels',
    type: 'skateboard wheels',
    product_description:
      'With their slightly softer urethane mixture, X-Formula Wheels promise smoother, quieter rolling, especially on rough surfaces. Despite the slightly softer material, the XF slide well and are also extremely durable. The V5 sidecut shape is conical, which saves weight and makes it easier to lock into grinds. With 97A the wheels are a bit softer than standard wheels Diameter 54mm, width 31mm Set of 4 wheels',
    price: '25.00',
  },
  {
    id: 6,
    product_name: 'spitfire',
    product_type: 'skateboard wheels',
    type: 'wheels',
    product_description:
      'The Spitfire tablet shape is cut straight to enable both a narrow running surface and good locking into grinds The Formula Four urethane is definitely one of the best formulas on the skateboard wheel market and is characterized above all by good slide behavior and long durability 52 millimeters in diameter, 29 millimeters wide, 20 millimeters of riding surface At 101D the wheels are rather hard which is good for speed and slides Set of 4 wheels',
    price: '35.00',
  },
  {
    id: 7,
    product_name: 'independent',
    product_type: 'trucks',
    type: 'skateboard trucks',
    product_description:
      'Mason Silva Pro Skateboard Independent Truck Co. truck Polished baseplate with a black hanger Orange medium bushings and black nuts 55.0 millimeters high Baseplate and hanger made of 356 T6 aluminum, axle pin made of 4140 chromo steel, grade 8 kingpin Weight 369 grams, hanger 149 millimeters, axle 8.5 inches 149 is best for decks 8.25 to 8.5 inches wide. Attention: Trucks are sold individually. For a pair of trucks please choose two',
    price: '50.00',
  },
  {
    id: 8,
    product_name: 'venture',
    product_type: 'trucks',
    type: 'skateboard trucks',
    product_description:
      'The Touzery V-Light is a Vincent Touzery Pro skateboard truck from Venture Trucks The V-Lights is the lighter version of the standard truck from Venture Trucks Venture are particularly popular with street skaters The V-Light is light and responsive with an extra hard, hollow kingpin The forged aluminum baseplate is light and robust The 5.6s have an 8.26 inch wide axle and are perfect for decks from 8.125 to 8.375 inches wide. The height up to the axle of the 5.6 V-Light is Axis 51 millimeters ATTENTION! Trucks are sold individually. For a pair of trucks, please choose two pieces',
    price: '43.00',
  },
  {
    id: 9,
    product_name: 'shake',
    product_type: 'accessory',
    type: 'bolts',
    product_description:
      'Skateboard Screw Mounting Hardware Set by Shake Junt in Baker Skateboards Colorway 7/8 inch length is right for you if you ride your trucks without risers or shock pads Consists: 8 Black Bolts, 8 Black Nuts, 1 Red Bolt, 1 Red Nut',
    price: '3.00',
  },
  {
    id: 10,
    product_name: 'real',
    product_type: 'accessory',
    type: 'tool',
    product_description:
      'The All In One Skate Tool is a skateboard T-tool by Element Skateboards Everything you need to assemble a skateboard: Allen and Phillips key 3/8 "socket for the kingpin nut 1/2 "nut for wheel assembly 9/16" nut for axle assembly',
    price: '7.00',
  },
  {
    id: 11,
    product_name: 'cruz',
    product_type: 'accessory',
    type: 'gripTape',
    product_description:
      'width: 9" length: 33" medium grain perforated for bubble-free application silicon-carbide for longlasting grip heat- and cold-resistant glue Dot logo print MOB Grip x Santa Cruz collaboration',
    price: '7.00',
  },
  {
    id: 12,
    product_name: 'trash',
    product_type: 'accessory',
    type: 'gripTape',
    product_description:
      'width: 9" length: 33" medium grain perforated for bubble-free application silicon-carbide for long-lasting grip heat and cold resistant glue Thrasher logo print MOB x Thrasher collab',
    price: '7.00',
  },
];

export async function up(sql) {
  await sql`
    INSERT INTO products ${sql(
      products,
      'product_name',
      'type',
      'product_type',
      'product_description',
      'price',
    )}
  `;
}

export async function down(sql) {
  for (const product of products) {
    await sql`
      DELETE FROM
        products
      WHERE
        id = ${product.id}
    `;
  }
}
