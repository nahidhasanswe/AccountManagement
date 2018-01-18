export const ROUTES = [
    { path: '/mypage/dashboard', title: 'Dashboard', icon: 'dashboard', children: null },
    { path: '#order', id: 'order', title: 'Order Management', icon: 'card_giftcard', children: [
      {path: 's', title: 'Current Order', icon: 'widgets'},
      {path: 's', title: 'Order History', icon: 'history'},
      {path: 's', title: 'Periodic Order', icon: 'schedule'},
      {path: 's', title: 'Causal Order', icon: 'shopping_basket'},
    ]},
    // { path: '#component', id: 'component', title: 'Component', icon: 'apps', children: [
    //     {path: 'sg', title: 'Product Management', icon: 'PT'},
    //     {path: 'sg', title: 'Order Management', icon: 'P'},
    //     {path: 'dsg', title: 'Customer Management', icon: 'W'},
    //   ]},
    { path: 'notification', title: 'Points', icon: 'control_point_duplicate', children: null }
  ];
export const MenuItems = [
  {title: 'Chart of Accounting', children: [
    {title: 'Create Ledger', children: null},
    {title: 'Create Group', children: null},
    {title: 'Create MIS name', children: null},
  ]},
  {title: 'Payment Voucher', children: [
    {title: 'Create Ledger', children: null},
    {title: 'Create Group', children: null},
    {title: 'Report', children: [
      {title: 'Trial Balance', children: [
        {title: 'Trial 1', children: null},
        {title: 'Trial 2', children: null},
      ]},
      {title: 'Balance Sheet', children: [
        {title: 'Balance Sheet 1', children: null},
        {title: 'Balance Sheet 2', children: null},
      ]},
      {title: 'Ledger', children: null},
    ]},
  ]},
];