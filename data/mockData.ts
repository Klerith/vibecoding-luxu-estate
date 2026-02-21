export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
  images?: string[];
  slug?: string;
  beds: number;
  baths: number;
  sqft: number;
  type: 'sale' | 'rent';
  isNew?: boolean;
}

export interface Collection {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
  images?: string[];
  slug?: string;
  beds: number;
  baths: number;
  sqft: number;
  tag: string;
}

export const featuredCollections: Collection[] = [
  {
    id: '1',
    images: [string;
  images?: string[];
  slug?: string;
  beds: number;
  baths: number;
  sqft: number;
  type: 'sale' | 'rent';
  isNew?: boolean;
}

export interface Collection {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
  images?: string[];
  slug?: string;
  beds: number;
  baths: number;
  sqft: number;
  tag: string;
}

export const featuredCollections: Collection[] = [
  {
    id: '1'],
    title: 'The Glass Pavilion',
    slug: 'The Glass Pavilion'.toLowerCase().replace(/ /g, '-').replace(/,/g, ''),
    location: 'Beverly Hills, California',
    price: 5250000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCra-FKp81t0_OM8bWD55m2o9OOSnR_v7D0UilyExMImxyIcr9tIMZ2Py3HcC0ra_MtSsBkduMcwxUNKI9_iSXFFr_YRON1SF9hNM3fcYy-uG7N7uusL0Z367WINi1V7_GwfNQx-gsbUqLtzVi4ivFyqFQGb4qBs79bALeSFb6i3_ZnJnI1VVrN-VeZYHjfYyQI5C6zy90N3uxWZpwzIBhNoUDKKQjQ8EOEYPoyPTzhnh6b6AS3dkkFJ8t4xSDC6qjhMrQUoUPnAeM',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuCra-FKp81t0_OM8bWD55m2o9OOSnR_v7D0UilyExMImxyIcr9tIMZ2Py3HcC0ra_MtSsBkduMcwxUNKI9_iSXFFr_YRON1SF9hNM3fcYy-uG7N7uusL0Z367WINi1V7_GwfNQx-gsbUqLtzVi4ivFyqFQGb4qBs79bALeSFb6i3_ZnJnI1VVrN-VeZYHjfYyQI5C6zy90N3uxWZpwzIBhNoUDKKQjQ8EOEYPoyPTzhnh6b6AS3dkkFJ8t4xSDC6qjhMrQUoUPnAeM'],
    beds: 5,
    baths: 4.5,
    sqft: 4200,
    tag: 'Exclusive',
  },
  {
    id: '2',
    title: 'Azure Heights Penthouse',
    slug: 'Azure Heights Penthouse'.toLowerCase().replace(/ /g, '-').replace(/,/g, ''),
    location: 'Downtown, Vancouver',
    price: 3800000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDurAGHzg_fpQxFal-obkFVy1Q3WLPdueAQpz0itcQiRV-WfvulnBEDJbNeV8J06q4mX7PTtXYVJjX4-mHVr_khZLZxQ_s8f6fruGqzeqALyMu8wEHRK1EsOs9f4_jPmS7FxcdzrDkR88Wz0GjaPLXkTZRoJQfur59rxYRLi-WYcW-VU_gKS39CPLOMlftvqGvW0IOk5tXgst5mJ4WQM-ICN4vkdel9ido9YFUQga0OI10i6NSe5W4owt33-2YRi_b_ltdZW2QZC5s',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuDurAGHzg_fpQxFal-obkFVy1Q3WLPdueAQpz0itcQiRV-WfvulnBEDJbNeV8J06q4mX7PTtXYVJjX4-mHVr_khZLZxQ_s8f6fruGqzeqALyMu8wEHRK1EsOs9f4_jPmS7FxcdzrDkR88Wz0GjaPLXkTZRoJQfur59rxYRLi-WYcW-VU_gKS39CPLOMlftvqGvW0IOk5tXgst5mJ4WQM-ICN4vkdel9ido9YFUQga0OI10i6NSe5W4owt33-2YRi_b_ltdZW2QZC5s'],
    beds: 3,
    baths: 3,
    sqft: 2100,
    tag: 'New Arrival',
  },
];

export const newInMarket: Property[] = [
  {
    id: '1',
    title: 'Modern Family Home',
    slug: 'Modern Family Home'.toLowerCase().replace(/ /g, '-').replace(/,/g, ''),
    location: '123 Pine St, Seattle',
    price: 850000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuQ9M7U6euA6_cXmYuXnej-N5IuawAW8ds-4G1mzfqmiBc13qXsPhf9_j_zTB8gfEunrBHo8xMsxYwCw_pl8fsxbxRkmyvLR1N9Tiye5ZJG7fwlLn9MwyBanXYhE0emGwp59es1FEyQTRQbmXLUKO74Yj34ZHqrqIkOtMKhP8CmRFvfoHT5LAe10105vUhKNkxIBvtt530nfLigSUTemOOcJMVNmsgactntRJUwOBU_TZzND7BYtDklr8uZcNYlQOK5U74-ufIf-E',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuDuQ9M7U6euA6_cXmYuXnej-N5IuawAW8ds-4G1mzfqmiBc13qXsPhf9_j_zTB8gfEunrBHo8xMsxYwCw_pl8fsxbxRkmyvLR1N9Tiye5ZJG7fwlLn9MwyBanXYhE0emGwp59es1FEyQTRQbmXLUKO74Yj34ZHqrqIkOtMKhP8CmRFvfoHT5LAe10105vUhKNkxIBvtt530nfLigSUTemOOcJMVNmsgactntRJUwOBU_TZzND7BYtDklr8uZcNYlQOK5U74-ufIf-E'],
    beds: 3,
    baths: 2,
    sqft: 120,
    type: 'sale',
    isNew: false,
  },
  {
    id: '2',
    title: 'Urban Loft',
    slug: 'Urban Loft'.toLowerCase().replace(/ /g, '-').replace(/,/g, ''),
    location: '456 Elm Ave, Portland',
    price: 3200,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4zNatD3vePhIZAi6OHHJKmamYSgeBNSKjEt32tvkkf4s6aBXCF8R4LNfDfPa9leA0t6N1OKOcP358WwZrnosbCBxSM7EaY2_P7qkx3MinRgmHQn7RvleNTwy8cLigMoR3iv0u83chBVbZYI6BcNMcqv80W-l1pIUgIWZcDIXEqtUatrsojSGfM0lTNDZpkBntBUkRY6NB4ZUymYNYvTHXKbO8NZ6N6uoyuuHqcaRWKzHCNXkOR3p-_EVFAHR8QwijIY_m1mefPZ4',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuB4zNatD3vePhIZAi6OHHJKmamYSgeBNSKjEt32tvkkf4s6aBXCF8R4LNfDfPa9leA0t6N1OKOcP358WwZrnosbCBxSM7EaY2_P7qkx3MinRgmHQn7RvleNTwy8cLigMoR3iv0u83chBVbZYI6BcNMcqv80W-l1pIUgIWZcDIXEqtUatrsojSGfM0lTNDZpkBntBUkRY6NB4ZUymYNYvTHXKbO8NZ6N6uoyuuHqcaRWKzHCNXkOR3p-_EVFAHR8QwijIY_m1mefPZ4'],
    beds: 1,
    baths: 1,
    sqft: 85,
    type: 'rent',
    isNew: false,
  },
  {
    id: '3',
    title: 'Highland Retreat',
    slug: 'Highland Retreat'.toLowerCase().replace(/ /g, '-').replace(/,/g, ''),
    location: '789 Mountain Rd, Bend',
    price: 620000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARQWC19e7mleUpjb8CWLztEv_svJeRFOaC2i-9r9GctFuX5Barzhfai9wNM1WW8bcGlqdFM32d3KPf7SItom5ijdHOz5rGGQPeT7PlWs8-y9LkfcsHLQqsLxalhxP94XJo76_mAMp7T2dVj3hPKHNzTDLLiS6ujSdSsyo3onxQthp4ZkVE8op92gyTLUUucaGaxO8vJvyhH3HuWB07EPqT1WsW0lr9Of5lUPonjG9eiqE1XiJXTqzXUZQt5JorfPwCO1MioZA_Zro',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuARQWC19e7mleUpjb8CWLztEv_svJeRFOaC2i-9r9GctFuX5Barzhfai9wNM1WW8bcGlqdFM32d3KPf7SItom5ijdHOz5rGGQPeT7PlWs8-y9LkfcsHLQqsLxalhxP94XJo76_mAMp7T2dVj3hPKHNzTDLLiS6ujSdSsyo3onxQthp4ZkVE8op92gyTLUUucaGaxO8vJvyhH3HuWB07EPqT1WsW0lr9Of5lUPonjG9eiqE1XiJXTqzXUZQt5JorfPwCO1MioZA_Zro'],
    beds: 2,
    baths: 2,
    sqft: 98,
    type: 'sale',
    isNew: false,
  },
  {
    id: '4',
    title: 'Sea View Penthouse',
    slug: 'Sea View Penthouse'.toLowerCase().replace(/ /g, '-').replace(/,/g, ''),
    location: '321 Ocean Dr, Miami',
    price: 4500,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGq4Phm0uDzCnjHAsnWpYTBVpOds_M6iOsJuRQQA5eUZHkztGgtc7eh_OE6wBeyW1-iZh7yyhROnvvmqkAZ9tyAWFGXk0FG52zU4kZ_EDLA0U0cRszy7byNXTeWe0_hS53SYmtCTEV8Y1AM-WxiIC38UMa15QwFDjXtCGQOxoh35K0Ol_70vfsxm0VqDbaWkr8tcEbLTLy0NXH_GcpGK4lAXizgxYOIlFWGyau-4OIfPZRpjCBDbz_qu3VlN201UUJGiuM9ajVd-U',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuBGq4Phm0uDzCnjHAsnWpYTBVpOds_M6iOsJuRQQA5eUZHkztGgtc7eh_OE6wBeyW1-iZh7yyhROnvvmqkAZ9tyAWFGXk0FG52zU4kZ_EDLA0U0cRszy7byNXTeWe0_hS53SYmtCTEV8Y1AM-WxiIC38UMa15QwFDjXtCGQOxoh35K0Ol_70vfsxm0VqDbaWkr8tcEbLTLy0NXH_GcpGK4lAXizgxYOIlFWGyau-4OIfPZRpjCBDbz_qu3VlN201UUJGiuM9ajVd-U'],
    beds: 3,
    baths: 3,
    sqft: 180,
    type: 'rent',
    isNew: false,
  },
  {
    id: '5',
    title: 'Central Studio',
    slug: 'Central Studio'.toLowerCase().replace(/ /g, '-').replace(/,/g, ''),
    location: '555 Main St, Chicago',
    price: 550000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1w-Hb1289NqZKon3VK8bpmMiCDYYiAMT5egzTINo9m9wSZRHv-k-1IGTVoL1NT8YeZXJHa87JPNDIPrtrbP7jChHq0ypXF90uByhC6VA9O788_B4FY8JVg4chbWN9bcrn9-9FvVvfZX8Aj60Iqg_C8CsCA9DEnJqi2rJvzmK5UP5z-9XRTRjBneAPCa8iGgGWBD9yYKsziN6vn0ePBDGo3inieQtmbr46W31p6UfQ649XRxTm7ygOY2J-jxW1r0qWs8i97KGpkTE',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuA1w-Hb1289NqZKon3VK8bpmMiCDYYiAMT5egzTINo9m9wSZRHv-k-1IGTVoL1NT8YeZXJHa87JPNDIPrtrbP7jChHq0ypXF90uByhC6VA9O788_B4FY8JVg4chbWN9bcrn9-9FvVvfZX8Aj60Iqg_C8CsCA9DEnJqi2rJvzmK5UP5z-9XRTRjBneAPCa8iGgGWBD9yYKsziN6vn0ePBDGo3inieQtmbr46W31p6UfQ649XRxTm7ygOY2J-jxW1r0qWs8i97KGpkTE'],
    beds: 1,
    baths: 1,
    sqft: 50,
    type: 'sale',
    isNew: false,
  },
  {
    id: '6',
    title: 'Garden Villa',
    slug: 'Garden Villa'.toLowerCase().replace(/ /g, '-').replace(/,/g, ''),
    location: '999 Oak Ln, Austin',
    price: 2800,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfGXdY0g51ojSg0GMeTW9ndLY3mpKK3oMtWxo2nwd_dwi1pgn1Boi_ovaDGIFhUA7nwu3WdBch8ZuHxoHu3QfgM5ceAsp8pglRVyCROWNcy9zeDNP2wqLoevyKGcaEyFYHYpIx2KK46nLWthnHiHugmkKw48kJsL8IjMO1bL3T1Zwt8bvQDTTUHTgB3GqZ2RU2asRzF1jVg0rLw3LWXXTq0YF1CsbhlWpYOuCEpH5bB8zkBlbKXR4At_M46AL8rJqn5c6BrPD5PP8',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuCfGXdY0g51ojSg0GMeTW9ndLY3mpKK3oMtWxo2nwd_dwi1pgn1Boi_ovaDGIFhUA7nwu3WdBch8ZuHxoHu3QfgM5ceAsp8pglRVyCROWNcy9zeDNP2wqLoevyKGcaEyFYHYpIx2KK46nLWthnHiHugmkKw48kJsL8IjMO1bL3T1Zwt8bvQDTTUHTgB3GqZ2RU2asRzF1jVg0rLw3LWXXTq0YF1CsbhlWpYOuCEpH5bB8zkBlbKXR4At_M46AL8rJqn5c6BrPD5PP8'],
    beds: 2,
    baths: 2,
    sqft: 110,
    type: 'rent',
    isNew: false,
  },
  {
    id: '7',
    title: 'Sunset Villa',
    slug: 'Sunset Villa'.toLowerCase().replace(/ /g, '-').replace(/,/g, ''),
    location: '101 Sunset Blvd, Los Angeles',
    price: 4500000,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&q=80',
    images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&q=80'],
    beds: 4,
    baths: 3.5,
    sqft: 250,
    type: 'sale',
    isNew: true,
  },
  {
    id: '8',
    title: 'Downtown Condo',
    slug: 'Downtown Condo'.toLowerCase().replace(/ /g, '-').replace(/,/g, ''),
    location: '500 5th Ave, New York',
    price: 5500,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&q=80',
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&q=80'],
    beds: 2,
    baths: 2,
    sqft: 120,
    type: 'rent',
    isNew: true,
  },
  {
    id: '9',
    title: 'Lakeside Mansion',
    slug: 'Lakeside Mansion'.toLowerCase().replace(/ /g, '-').replace(/,/g, ''),
    location: '77 Lakeview Dr, Geneva',
    price: 8200000,
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=500&q=80',
    images: ['https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=500&q=80'],
    beds: 6,
    baths: 5,
    sqft: 450,
    type: 'sale',
    isNew: false,
  },
  {
    id: '10',
    title: 'Cozy Mountain Cabin',
    slug: 'Cozy Mountain Cabin'.toLowerCase().replace(/ /g, '-').replace(/,/g, ''),
    location: '33 Snow Peak, Aspen',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=500&q=80',
    images: ['https://images.unsplash.com/photo-1449844908441-8829872d2607?w=500&q=80'],
    beds: 3,
    baths: 2,
    sqft: 160,
    type: 'rent',
    isNew: false,
  },
  {
    id: '11',
    title: 'Minimalist Townhouse',
    slug: 'Minimalist Townhouse'.toLowerCase().replace(/ /g, '-').replace(/,/g, ''),
    location: '22 Baker St, London',
    price: 1200000,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&q=80',
    images: ['https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&q=80'],
    beds: 3,
    baths: 2.5,
    sqft: 180,
    type: 'sale',
    isNew: true,
  },
  {
    id: '12',
    title: 'Luxury Beachfront',
    slug: 'Luxury Beachfront'.toLowerCase().replace(/ /g, '-').replace(/,/g, ''),
    location: '88 Ocean Blue, Malibu',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=500&q=80',
    images: ['https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=500&q=80'],
    beds: 5,
    baths: 4,
    sqft: 350,
    type: 'rent',
    isNew: true,
  },
  {
    id: '13',
    title: 'Historic Estate',
    slug: 'Historic Estate'.toLowerCase().replace(/ /g, '-').replace(/,/g, ''),
    location: '1 Royal Way, Edinburgh',
    price: 5400000,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&q=80',
    images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&q=80'],
    beds: 7,
    baths: 6,
    sqft: 600,
    type: 'sale',
    isNew: false,
  },
  {
    id: '14',
    title: 'Riverside Apartment',
    slug: 'Riverside Apartment'.toLowerCase().replace(/ /g, '-').replace(/,/g, ''),
    location: '40 Thames St, London',
    price: 4800,
    image: 'https://images.unsplash.com/photo-1502672260266-1c15293036e3?w=500&q=80',
    images: ['https://images.unsplash.com/photo-1502672260266-1c15293036e3?w=500&q=80'],
    beds: 2,
    baths: 2,
    sqft: 110,
    type: 'rent',
    isNew: true,
  },
  {
    id: '15',
    title: 'Country Farmhouse',
    slug: 'Country Farmhouse'.toLowerCase().replace(/ /g, '-').replace(/,/g, ''),
    location: '90 Green Ln, Cotswolds',
    price: 950000,
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&q=80',
    images: ['https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&q=80'],
    beds: 4,
    baths: 3,
    sqft: 280,
    type: 'sale',
    isNew: false,
  },
  {
    id: '16',
    title: 'Skyview Penthouse',
    slug: 'Skyview Penthouse'.toLowerCase().replace(/ /g, '-').replace(/,/g, ''),
    location: '100 King St, Toronto',
    price: 7500,
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500&q=80',
    images: ['https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500&q=80'],
    beds: 3,
    baths: 3.5,
    sqft: 220,
    type: 'rent',
    isNew: true,
  },
];
