// import { api } from ""

// const ApiMenu = () => {
//     var listMenuJSON = api.get("");
// }
// export default function Menu() {}
// const Menu = [
//     {
//         heading: 'Main Navigation',
//         translate: 'sidebar.heading.HEADER'
//     },
//     {
//         name: 'Single View',
//         path: 'singleview',
//         icon : 'icon-grid',
//         translate: 'sidebar.nav.SINGLEVIEW'
//     },
//     {
//         name: 'Indicadores',
//         icon: 'icon-speedometer',
//         translate: 'sidebar.nav.MENU',
//         label: { value: 2, color: 'info' },
//         submenu: 
//         [
//             {
//                 name: 'Comum',
//                 translate: 'sidebar.nav.SUBMENU',
//                 path: 'submenu'
//             },
//             {
//                 name: 'Teste',
//                 translate: 'sidebar.nav.TESTE',
//                 path: 'singleview'
//             },
//         ]
//     }
// ];
// export default Menu;

const Menu = [
    {
        name: 'Indicadores',
        icon: 'icon-speedometer',
        translate: 'sidebar.nav.MENU',
        label: { value: 2, color: 'info' },
        submenu: 
        [
            {
                name: 'Favoritos',
                translate: 'sidebar.nav.SUBMENU',
                path: 'submenu'
            },
            {
                name: 'Vendas',
                translate: 'sidebar.nav.TESTE',
                path: 'singleview'
            },
        ]
    }
];
export default Menu;
