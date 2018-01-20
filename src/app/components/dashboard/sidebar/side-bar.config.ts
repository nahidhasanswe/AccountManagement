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
  {title: 'MIS', url: '', children: [
    {title: 'Chart of Accounting',icon:'insert_chart', url: '/accounting/mis/chart-of-accounting', children: null},
    {title: 'Create MIS',icon:'add_to_photos', url: '/accounting/mis/create-mis', children: null},
  ]},
  {title: 'Creations', url: '', children: [
    {title: 'Create Group',icon:'group_work', url: '/accounting/creations/create-group', children: null},
    {title: 'Create Ledger',icon:'add_box', url: '/accounting/creations/create-ledger', children: null},
  ]},
  {title: 'Voucher', url: '', children: [
    {title: 'Journal',icon:'library_books', url: '/accounting/voucher/journal', children: null},
    {title: 'Payment',icon:'payment', url: '/accounting/voucher/payment', children: null},
    {title: 'Receive',icon:'call_received', url: '/accounting/voucher/receive', children: null},
  ]},
  {title: 'Report', url: '', children: [
    {title: 'Trial Balance',icon:'account_balance_wallet', url: '/accounting/report/trial-balance', children: null},
    {title: 'Balance Sheet',icon:'monetization_on', url: '/accounting/report/balance-sheet', children: null},
    {title: 'Ledger Book',icon:'book', url: '/accounting/report/ledger-book', children: null},
    {title: 'Income Statement',icon:'low_priority', url: '/accounting/report/income-statement', children: null},
    {title: 'Payment Receive Statement',icon:'attach_money', url: '/accounting/report/payment-receive-statement', children: null},
  ]},
  {title: 'Setting', url: '', children: [
    {title: 'Bank Info',icon:'account_balance', url: '/accounting/settings/bank-info', children: null},
    {title: 'Company',icon:'home', url: '/accounting/mis/comapny', children: null},
    {title: 'Bank Account Type',icon:'line_style', url: '/accounting/mis/bank-account-type', children: null}
  ]},
];