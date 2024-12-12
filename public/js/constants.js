const codeOptions = [{
  label: 'Aircraft – Fixed Wing',
  value: '1510'
}, {
  label: 'Aircraft – Rotary Wing',
  value: '1520'
}, {
  label: 'Gliders',
  value: '1540'
}, {
  label: 'Drones',
  value: '1550'
}, {
  label: 'Airframe Structural Components',
  value: '1560'
}, {
  label: 'Aircraft Propellers and Components',
  value: '1610'
}, {
  label: 'Helicopter Rotor Blades, Drive Mechanisms and Components',
  value: '1615'
}, {
  label: 'Aircraft Landing Gear Components',
  value: '1620'
}, {
  label: 'Aircraft Wheel and Brake Systems',
  value: '1630'
}, {
  label: 'Aircraft Control Cable Products',
  value: '1640'
}, {
  label: 'Aircraft Hydraulic, Vacuum, and De-icing System Components',
  value: '1650'
}, {
  label: 'Aircraft Air Conditioning, Heating, and Pressurizing Equipment',
  value: '1660'
}, {
  label: 'Parachutes; Aerial Pick Up, Delivery, Recovery Systems; and Cargo Tie Down Equipment',
  value: '1670'
}, {
  label: 'Miscellaneous Aircraft Accessories and Components',
  value: '1680'
}, {
  label: 'Airfield Specialized Trucks and Trailers',
  value: '1740'
}, {
  label: 'Combat ship and landing vessel',
  value: '1905'
}, {
  label: 'Transport vessels, passenger & troop',
  value: '1910'
}, {
  label: 'Cargo & tanker vessels',
  value: '1915'
}, {
  label: 'Fishing vessels',
  value: '1920'
}, {
  label: 'Combat ships & landing vessels',
  value: '1925'
}, {
  label: 'Barges, lighters, cargo',
  value: '1930'
}, {
  label: 'Barges, lighters, special purpose',
  value: '1935'
}, {
  label: 'Small Craft',
  value: '1940'
}, {
  label: 'Pontoons and Floating Docks',
  value: '1945'
}, {
  label: 'Floating dry docks',
  value: '1950'
}, {
  label: 'Dredges',
  value: '1955'
}, {
  label: 'Miscellaneous Vessels',
  value: '1990'
}, {
  label: 'Ship and Boat Propulsion Components',
  value: '2010'
}, {
  label: 'Rigging and Rigging Gear',
  value: '2020'
}, {
  label: 'Deck Machinery',
  value: '2030'
}, {
  label: 'Marine Hardware and Hull Items',
  value: '2040'
}, {
  label: 'Buoys',
  value: '2050'
}, {
  label: 'Commercial Fishing Equipment',
  value: '2060'
}, {
  label: 'Miscellaneous Ship and Marine Equipment',
  value: '2090'
}, {
  label: 'Ground effect vehicles',
  value: '2305'
}, {
  label: 'Passenger Motor Vehicles',
  value: '2310'
}, {
  label: 'Trucks and tractors',
  value: '2320'
}, {
  label: 'Trailers',
  value: '2330'
}, {
  label: 'Motocycles, motor scooters, bicycles',
  value: '2340'
}, {
  label: 'Tractor, full track, low speed',
  value: '2410'
}, {
  label: 'Tractor, wheeled',
  value: '2420'
}, {
  label: 'Tractor, full track, high speed',
  value: '2430'
}, {
  label: 'Tires and Tubes, Except Aircraft',
  value: '2610'
}, {
  label: 'Tires, Solid and Cushion',
  value: '2630'
}, {
  label: 'Tires and Tubes, Aircraft',
  value: '2640'
}, {
  label: 'Tire Rebuilding and Tire and Tube Repair Materials',
  value: '2640'
}, {
  label: 'Gasoline Reciprocating Engines, Aircraft Prime Mover; and Components',
  value: '2810'
}, {
  label: 'Gas Turbines and Jet Engines, Aircraft Prime Moving; and Components',
  value: '2840'
}, {
  label: 'Miscellaneous Welding Equipment',
  value: '3438'
}, {
  label: 'Miscellaneous Welding, Soldering, and Brazing Supplies and Accessories',
  value: '3439'
}, {
  label: 'Laundry & Dry Cleaning Equipment',
  value: '3510'
}, {
  label: 'Shoe Repairing Equipment',
  value: '3520'
}, {
  label: 'Industrial Sewing Machines and Mobile Textile Repair Shops',
  value: '3530'
}, {
  label: 'Wrapping and Packaging Machinery',
  value: '3540'
}, {
  label: 'Vending and Coin Operated Machines',
  value: '3550'
}, {
  label: 'Micellaneious Serice and Trade Equipment',
  value: '3590'
}, {
  label: 'Food Products, Machinery, and Equipment',
  value: '3605'
}, {
  label: 'Printing, Duplicating, and Bookbinding Equipment',
  value: '3610'
}, {
  label: 'Industrial Marking Machines',
  value: '3611'
}, {
  label: 'Pulp and Paper Industrial Machinery',
  value: '3615'
}, {
  label: 'Rubber and Plastic Working Machinery',
  value: '3620'
}, {
  label: 'Textile Industries Machinery',
  value: '3625'
}, {
  label: 'Clay and Concrete Products Industrial Machinery',
  value: '3630'
}, {
  label: 'Crystal and Glass Industries Machinery',
  value: '3635'
}, {
  label: 'Soil Preparation Equipment',
  value: '3710'
}, {
  label: 'Harvesting Equipment',
  value: '3720'
}, {
  label: 'Dairy, Poultry and Livestock Equipment',
  value: '3730'
}, {
  label: 'Pest, Disease and Frost Control Equipment',
  value: '3740'
}, {
  label: 'Gardening Implements and Tools',
  value: '3750'
}, {
  label: 'Saddlery, Harness Whips and Related Animal Furnishings',
  value: '3770'
}, {
  label: 'Earth moving and excavating equipment',
  value: '3805'
}, {
  label: 'Cranes and crane-shovels',
  value: '3810'
}, {
  label: 'Crane and crane shovel attachments',
  value: '3815'
}, {
  label: 'Mining, rock drilling, earth boring, & related equipment',
  value: '3820'
}, {
  label: 'Road clearing, cleaning, & marketing equipment',
  value: '3825'
}, {
  label: 'Truck and Tractor attachments',
  value: '3830'
}, {
  label: 'Warehouse Trucks and Tractors',
  value: '3930'
}, {
  label: 'Fire Fighting Equipment',
  value: '4210'
}, {
  label: 'Safety and Rescue Equipment',
  value: '4240'
}, {
  label: 'Hand Tools, Edged, Nonpowered',
  value: '5110'
}, {
  label: 'Hand Tools, Nonedged, Nonpowered',
  value: '5120'
}, {
  label: 'Hand Tools, Power Driven',
  value: '5130'
}, {
  label: 'Drill Bits',
  value: '5133'
}, {
  label: 'Tool and Hardware Boxes',
  value: '5140'
}, {
  label: 'Measuring Tools',
  value: '5210'
}, {
  label: 'Screws',
  value: '5305'
}, {
  label: 'Bolts',
  value: '5306'
}, {
  label: 'Studs',
  value: '5307'
}, {
  label: 'Nuts and Washers',
  value: '5310'
}, {
  label: 'Nails, Machine Keys, and Pins',
  value: '5315'
}, {
  label: 'Rivets',
  value: '5320'
}, {
  label: 'Packing and Gasket Materials',
  value: '5330'
}, {
  label: 'Hardware',
  value: '5340'
}, {
  label: 'Brackets',
  value: '5341'
}, {
  label: 'Bushings, Rings, Shims, and Spacers',
  value: '5365'
}, {
  label: 'Scaffolding Equipment and Concrete Forms',
  value: '5440'
}, {
  label: 'Miscellaneous Construction Materials',
  value: '5680'
}, {
  label: 'Telephone and Telegraph Equipment',
  value: '5805'
}, {
  label: 'Communications Secruity Equipment and Components',
  value: '5810'
}, {
  label: 'Other Cryptologic Equipment and Components',
  value: '5811'
}, {
  label: 'Teletype and Facsmile Equipment',
  value: '5815'
}, {
  label: 'Radio and Television Communication Equipment, Except Airborne',
  value: '5820'
}, {
  label: 'Radio and Television Communication Equipment, Airborne',
  value: '5821'
}, {
  label: 'Radio navigation equipment, except airborne',
  value: '5825'
}, {
  label: 'Radio navigation equipment, airborne',
  value: '5826'
}, {
  label: 'Intercommunication and Public Address Systems, Except Airborne',
  value: '5830'
}, {
  label: 'Intercommunication and Public Address Systems, Airborne',
  value: '5831'
}, {
  label: 'Sound Recording and Reproducing Equipment',
  value: '5835'
}, {
  label: 'Sound recording and reproducing equipment',
  value: '5835'
}, {
  label: 'Video Recording and Reproducing Equipment',
  value: '5836'
}, {
  label: 'Video recording and reproduction equipment',
  value: '5836'
}, {
  label: 'Radar equipment, except airborne',
  value: '5840'
}, {
  label: 'Radar equipment, airborne',
  value: '5841'
}, {
  label: 'Underwater sound equipment',
  value: '5845'
}, {
  label: 'Visible and invisible light communication equipment',
  value: '5850'
}, {
  label: 'Night vision equipment, emitted and reflected radiation',
  value: '5855'
}, {
  label: 'Stimulated Coherent Radiation Devices, Components, and Accessories',
  value: '5860'
}, {
  label: 'Electronic Countermesaures, Couter-Countermesaures, and Quick Reactive',
  value: '5865'
}, {
  label: 'Miscellaneous Communication Equipment',
  value: '5895'
}, {
  label: 'Resistors',
  value: '5905'
}, {
  label: 'Capacitors',
  value: '5910'
}, {
  label: 'Filters and networks',
  value: '5915'
}, {
  label: 'Fuses, arrestors, absorbers, and protectors',
  value: '5920'
}, {
  label: 'Circuit breakers',
  value: '5925'
}, {
  label: 'Switches',
  value: '5930'
}, {
  label: 'Connectors, electrical',
  value: '5935'
}, {
  label: 'Lugs, terminals, and terminal strips',
  value: '5940'
}, {
  label: 'Relays and Solenoids',
  value: '5945'
}, {
  label: 'Coils and transformers',
  value: '5950'
}, {
  label: 'Oscillators and piezoelectric crystals',
  value: '5955'
}, {
  label: 'Electron tubes and associated hardware',
  value: '5960'
}, {
  label: 'Semiconductor devices and associated hardware',
  value: '5961'
}, {
  label: 'Microcircuits, electronic',
  value: '5962'
}, {
  label: 'Electronic modules',
  value: '5963'
}, {
  label: 'Headsets, handsets, microphones and speakers',
  value: '5965'
}, {
  label: 'Electrical insulators and insulating materials',
  value: '5970'
}, {
  label: 'Electrical hardware and supplies',
  value: '5975'
}, {
  label: 'Electrical and electronic assemblies, boards, cards, & associated hardware',
  value: '5998'
}, {
  label: 'Generators, Generator Set, Electrical',
  value: '6115'
}, {
  label: 'Drugs and biologicals',
  value: '6505'
}, {
  label: 'Medicated cosmetics and toiletries',
  value: '6508'
}, {
  label: 'Medical and surgical instruments, equipment, and supplies',
  value: '6515'
}, {
  label: 'Dental instruments, equipment, and supplies',
  value: '6520'
}, {
  label: 'X-ray equipment and supplies: medical, dental, veterinary',
  value: '6525'
}, {
  label: 'Hospital furniture, equipment, utensils, and supplies',
  value: '6530'
}, {
  label: 'Hospital and surgical clothing and related special purpose items',
  value: '6532'
}, {
  label: 'Ophthalmic instruments, equipment, and supplies',
  value: '6540'
}, {
  label: 'Replenishable field medical sets, kits, and outfits',
  value: '6545'
}, {
  label: 'In Vitro diagnostic substances, reagents, test kits and sets',
  value: '6550'
}, {
  label: 'Electrical and electronic properties measuring & testing instruments',
  value: '6625'
}, {
  label: 'Chemical analysis equipment',
  value: '6630'
}, {
  label: 'Physical properties testing equipment',
  value: '6635'
}, {
  label: 'Environmental cambers and related equipment',
  value: '6636'
}, {
  label: 'Laboratory equipment & supplies',
  value: '6640'
}, {
  label: 'Time measuring instrument',
  value: '6645'
}, {
  label: 'Optical instruments, test equipment',
  value: '6650'
}, {
  label: 'Geophysical instruments',
  value: '6655'
}, {
  label: 'Meteorological instruments and apparatus',
  value: '6660'
}, {
  label: 'Hazard-detecting instruments and apparatus',
  value: '6665'
}, {
  label: 'Scales and balances',
  value: '6670'
}, {
  label: 'Drafting, surveying, and mapping instruments',
  value: '6675'
}, {
  label: 'Liquid and gas flow, liquid level, and mechanical motion measuring instruments',
  value: '6680'
}, {
  label: 'Pressure, temperature, and humidity measuring and controlling instruments',
  value: '6685'
}, {
  label: 'Combination and miscellaneous instruments',
  value: '6695'
}, {
  label: 'Cameras, motion picture',
  value: '6710'
}, {
  label: 'Cameras, still picture',
  value: '6720'
}, {
  label: 'Photographic supplies',
  value: '6730'
}, {
  label: 'Photographic equipment and accessories',
  value: '6760'
}, {
  label: 'Film, processed',
  value: '6770'
}, {
  label: 'Photographic sets, kits, and outfits',
  value: '6780'
}, {
  label: 'ADPE system configuration',
  value: '7010'
}, {
  label: 'ADP central processing unit (CPU, computer), analog',
  value: '7020'
}, {
  label: 'ADP central processing unit (CPU, computer), digital',
  value: '7021'
}, {
  label: 'ADP central processing unit (CPU, computer), hybrid',
  value: '7022'
}, {
  label: 'ADP input/output and storage devices',
  value: '7025'
}, {
  label: 'ADP software',
  value: '7030'
}, {
  label: 'ADP support equipment',
  value: '7035'
}, {
  label: 'Punched card equipment',
  value: '7040'
}, {
  label: 'Mini and Microcomputer control devices',
  value: '7042'
}, {
  label: 'ADP supplies',
  value: '7045'
}, {
  label: 'ADP components',
  value: '7050'
}, {
  label: 'Household Furniture',
  value: '7105'
}, {
  label: 'Office Furniture',
  value: '7110'
}, {
  label: 'Cabinets, Lockers, Bins, and Shelving',
  value: '7125'
}, {
  label: 'Miscellaneous Furniture and Fixtures',
  value: '7195'
}, {
  label: 'Household Furnishings',
  value: '7210'
}, {
  label: 'Floor Coverings',
  value: '7220'
}, {
  label: 'Draperies, Awnings and Shades',
  value: '7230'
}, {
  label: 'Household and Commercial Utility Containers',
  value: '7240'
}, {
  label: 'Miscellaneous Household and Commercial Furnishings and Appliances',
  value: '7290'
}, {
  label: 'Food Cooking, Baking, and Serving Equipment',
  value: '7310'
}, {
  label: 'Kitchen Equipment and Appliances',
  value: '7320'
}, {
  label: 'Kitchen Hand Tool and Utensils',
  value: '7330'
}, {
  label: 'Cutlery and Flatware',
  value: '7340'
}, {
  label: 'Tableware',
  value: '7350'
}, {
  label: 'Sets, Kits, Outfits and Modules, Food Preparation and Serving',
  value: '7360'
}, {
  label: 'Accounting & Calculating Machines',
  value: '7420'
}, {
  label: 'Typewriters & office type composing machines',
  value: '7430'
}, {
  label: 'Office Information Systems equipment',
  value: '7435'
}, {
  label: 'Office type sound recording & reproducing machines',
  value: '7450'
}, {
  label: 'Visible Record Machines',
  value: '7460'
}, {
  label: 'Miscellaneous Office Machines',
  value: '7490'
}, {
  label: 'Office supplies',
  value: '7510'
}, {
  label: 'Office Devices & Accessories',
  value: '7520'
}, {
  label: 'Stationery & Record Forms',
  value: '7530'
}, {
  label: 'Standard Forms',
  value: '7540'
}, {
  label: 'Musical Instruments',
  value: '7710'
}, {
  label: 'Musical Instrument Parts and Accessories',
  value: '7720'
}, {
  label: 'Phonographs, Radios, and Television Sets, Home Type',
  value: '7730'
}, {
  label: 'Parts and Accessories of Phonographs, Radios, and Television Set',
  value: '7735'
}, {
  label: 'Phonograph Records',
  value: '7740'
}, {
  label: 'Athletic and Sporting Equipment',
  value: '7810'
}, {
  label: 'Games, Toys and Wheeled Goods',
  value: '7820'
}, {
  label: 'Recreational and Gymnastic Equipment',
  value: '7830'
}, {
  label: 'Floor Polishers and Vacuum Cleaning Equipment',
  value: '7910'
}, {
  label: 'Brooms, Brushes, Mops and Sponges',
  value: '7920'
}, {
  label: 'Cleaning and Polishing Compounds and Preparations',
  value: '7930'
}, {
  label: 'Clothing, Special Purpose',
  value: '8315'
}, {
  label: 'Outerwear, Men’s',
  value: '8405'
}, {
  label: 'Outerwear, Women’s',
  value: '8410'
}, {
  label: 'Clothing, Special Purpose',
  value: '8415'
}, {
  label: 'Underwear and Nightwear, Men’s',
  value: '8420'
}, {
  label: 'Underwear and Nightwear, Women’s',
  value: '8425'
}, {
  label: 'Footwear, Men’s',
  value: '8430'
}, {
  label: 'Footwear, Women’s',
  value: '8435'
}, {
  label: 'Hosiery, Hand wear, Clothing Accessories, Men’s',
  value: '8440'
}, {
  label: 'Hosiery, Hand wear, Clothing Accessories, Women’s',
  value: '8445'
}, {
  label: 'Children’s and Infants’ Apparel and Accessories',
  value: '8450'
}, {
  label: 'Badges and Insignia',
  value: '8455'
}, {
  label: 'Luggage',
  value: '8460'
}, {
  label: 'Individual Equipment',
  value: '8465'
}, {
  label: 'Perfumes, Toilet Preparation, and Powders',
  value: '8510'
}, {
  label: 'Toilet Soap, Shaving Preparations, and Dentifrices',
  value: '8520'
}, {
  label: 'Personal Toiletry Articles',
  value: '8530'
}, {
  label: 'Toiletry Paper Products',
  value: '8540'
}, {
  label: 'Forage and Feed',
  value: '8710'
}, {
  label: 'Fertilizers',
  value: '8720'
}, {
  label: 'Seeds and Nursery Stock',
  value: '8730'
}, {
  label: 'Live Animals, Raised for Food',
  value: '8810'
}, {
  label: 'Live Animals, Not Raised for Food',
  value: '8820'
}, {
  label: 'Jewelry',
  value: '9910'
}, {
  label: 'Collectors’ and/or Historical Items',
  value: '9915'
}]

const filterOptions = [{ 
  label: 'Automated Indefinite Delivery Contract',
  value: 'ctl00_cph1_ckhAidc',
  img: './assets/img/IconAIDC.png',
}, { 
  label: 'Items with Technical Documents',
  value: 'ctl00_cph1_chkBidSet',
  img: './assets/img/IconCfolder.gif',
}, { 
  label: 'Fast Award Candidates',
  value: 'ctl00_cph1_chkFastPace',
  img: './assets/img/IconFastPace.gif',
}, { 
  label: 'Small Business Set-Asides',
  value: 'ctl00_cph1_chkSmallBusiness',
  img: './assets/img/IconSB.gif',
}, { 
  label: 'HUBZone Set-Asides',
  value: 'ctl00_cph1_chkHubZone',
  img: './assets/img/IconHubZone.gif',
}, { 
  label: 'Service Disabled Veteran Owned Small Business Set-Asides',
  value: 'ctl00_cph1_chkServiceDisabledVeteranOwnedSmallBusiness',
  img: './assets/img/IconSdvosb.gif',
}, { 
  label: 'Woman Owned Small Business Set-Asides',
  value: 'ctl00_cph1_chkWosb',
  img: './assets/img/iconWOSB.png',
}, { 
  label: 'Economically Disadvantaged Women Owned Small Business Set-Asides',
  value: 'ctl00_cph1_chkEdwosb',
  img: './assets/img/iconEDWOSB.png',
}, { 
  label: 'Unrestricted/Not Set-Asides',
  value: 'ctl00_cph1_chkUnrestricted',
  img: './assets/img/iconUnrestrictedNotSetAside.png',
}]

var dropdownFocus = 0

var searchValues = []
var showOnly = []
var lastDay = 3