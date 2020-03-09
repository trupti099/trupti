import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RoleService } from './role-service.service';
import { Role } from '../models/role.model';

export interface IMenuItem {
    id?: string;
    title?: string;
    description?: string;
    type: string;       // Possible values: link/dropDown/extLink
    name?: string;      // Used as display text for item and title for separator type
    state?: string;     // Router state
    icon?: string;      // Material icon name
    tooltip?: string;   // Tooltip text
    disabled?: boolean; // If true, item will not be appeared in sidenav.
    sub?: IChildItem[]; // Dropdown items
    badges?: IBadge[];
    active?: boolean;
}
export interface IChildItem {
    id?: string;
    parentId?: string;
    type?: string;
    name: string;       // Display text
    state?: string;     // Router state
    icon?: string;
    sub?: IChildItem[];
    active?: boolean;
}

interface IBadge {
    color: string;      // primary/accent/warn/hex color codes(#fff000)
    value: string;      // Display text
}

interface ISidebarState {
    sidenavOpen?: boolean;
    childnavOpen?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    public sidebarState: ISidebarState = {
        sidenavOpen: true,
        childnavOpen: false
    };
    userType: string;
    activeMenuItem$: Observable<IMenuItem>;

    constructor(private auth: AuthService, public router: Router, private roleservice: RoleService) {
        router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((data) => {
            const FFCUser = this.auth.currentUserValue;
            if (this.auth.isUserLoggedIn && FFCUser) {
                if (FFCUser.role) {
                    this.userType = FFCUser.role
                    this.publishNavigationChange(this.userType)
                }
            }
        });
        // this.userType=this.roleservice.userType;
    }
    defaultMenu: IMenuItem[] = []

    pspMenu: IMenuItem[] = [
        {
            name: 'Dashboard',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'link',
            icon: 'i-Bar-Chart',
            state: '/admin/dashboard'
        },
        {
            name: 'POS',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'link',
            icon: 'i-Administrator',
            state: '/admin/pos'
        },

        // {
        //     name: 'Account Manager',
        //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        //     type: 'link',
        //     icon: 'i-Geek',
        //     state: '/account-manager',
        // },
        {
            name: 'Delivery Boys',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'link',
            icon: 'i-Cool-Guy',
            state: '/admin/delivery-boys',
        },
        {
            name: 'Customers',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'link',
            icon: 'i-Business-Mens',
            state: '/admin/customers',
        },
        {
            name: 'Support Tickets',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'link',
            icon: 'i-Ticket',
            state: '/admin/supports',

        },
        {
            name: 'Parcels',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'link',
            icon: 'i-Box-Full',
            state: '/admin/parcels',
        },
        /* {
            name: 'Transportation',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'link',
            icon: 'i-Plane',
            state: '/admin/transportation',
            
        }, */
        {
            name: 'Report',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'dropDown',
            icon: 'i-Receipt-3',
            sub: [
                { icon: 'i-Box-Full', name: 'Parcels', state: '/admin/report/parcels-report', type: 'link' },
                { icon: 'i-Management', name: 'Account', state: '/admin/report/accounts-report', type: 'link' },
                { icon: 'i-Business-Mens', name: 'Customer', state: '/admin/report/customers-report', type: 'link' },
                { icon: 'i-Ticket', name: 'Support-Ticket', state: '/admin/report/support-ticket-report', type: 'link' }
            ]
        },
        {
            name: 'Settings',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'link',
            icon: 'i-Gear',
            state: '/admin/setting',

        },


        // {
        //     name: 'UI kits',
        //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        //     type: 'dropDown',
        //     icon: 'i-Library',
        //     sub: [
        //         { icon: 'i-Bell', name: 'Alerts', state: '/uikits/alerts', type: 'link' },
        //         { icon: 'i-Split-Horizontal-2-Window', name: 'Accordions', state: '/uikits/accordions', type: 'link' },
        //         { icon: 'i-Medal-2', name: 'Badges', state: '/uikits/badges', type: 'link' },
        //         {
        //             icon: 'i-Arrow-Right-in-Circle',
        //             name: 'Buttons',
        //             type: 'dropDown',
        //             sub: [
        //                 { name: 'Bootstrap Buttons', state: '/uikits/buttons', type: 'link' },
        //                 { name: 'Loding Buttons', state: '/uikits/buttons-loading', type: 'link' }
        //             ]
        //         },
        //         { icon: 'i-ID-Card', name: 'Cards', state: '/uikits/cards', type: 'link' },
        //         { icon: 'i-Line-Chart-2', name: 'Cards metrics', state: '/uikits/cards-metrics', type: 'link' },
        //         { icon: 'i-Credit-Card', name: 'Cards widget', state: '/uikits/cards-widget', type: 'link' },
        //         { icon: 'i-Full-Cart', name: 'Cards ecommerce', state: '/uikits/cards-ecommerce', type: 'link' },
        //         { icon: 'i-Duplicate-Window', name: 'Modals', state: '/uikits/modals', type: 'link' },
        //         { icon: 'i-Speach-Bubble-3', name: 'Popover', state: '/uikits/popover', type: 'link' },
        //         { icon: 'i-Like', name: 'Rating', state: '/uikits/rating', type: 'link' },
        //         { icon: 'i-Loading-3', name: 'Loaders', state: '/uikits/loaders', type: 'link' },
        //     ]
        // },


        // {
        //     name: 'Pages',
        //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        //     type: 'dropDown',
        //     icon: 'i-Windows-2',
        //     sub: [
        //         { icon: 'i-Male', name: 'User Profile', state: '/pages/profile', type: 'link' }
        //     ]
        // },
        // {
        //     name: 'Icons',
        //     description: '600+ premium icons',
        //     type: 'link',
        //     icon: 'i-Cloud-Sun',
        //     state: '/icons/iconsmind'
        // },
        // {
        //     name: 'Others',
        //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        //     type: 'dropDown',
        //     icon: 'i-Double-Tap',
        //     sub: [
        //         { icon: 'i-Error-404-Window', name: 'Not found', state: '/others/404', type: 'link' }
        //     ]
        // },
        // {
        //     name: 'Doc',
        //     type: 'extLink',
        //     tooltip: 'Documentation',
        //     icon: 'i-Safe-Box1',
        //     state: 'http://demos.ui-lib.com/gull-doc'
        // }
    ];
    superAdminMenu: IMenuItem[] = [

        {
            name: 'Super Admin Dashoard',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'link',
            icon: 'i-Bar-Chart',
            state: '/admin/dashboard',
        },
        {
            name: 'PSP',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'link',
            icon: 'i-Administrator',
            state: '/admin/psp',
        },
        {
            name: 'CRM',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'link',
            icon: 'i-Support',
            state: '/admin/crm',
        },
        /*   {
              name: 'Account Manager',
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              type: 'link',
              icon: 'i-Geek',
              state: '/admin/account-manager',
          }, */
        {
            name: 'POS',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'link',
            icon: 'i-Administrator',
            state: '/admin/pos',
        },
        {
            name: 'Customers',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'link',
            icon: 'i-Business-Mens',
            state: '/admin/customers',
        },
        {
            name: 'Support Ticket',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'link',
            icon: 'i-Ticket',
            state: '/admin/supports',
        },
        {
            name: 'Parcels',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'link',
            icon: 'i-Box-Full',
            state: '/admin/parcels',
        },
        {
            name: 'Report',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'dropDown',
            icon: 'i-Receipt-3',
            sub: [
                { icon: 'i-Box-Full', name: 'Parcels', state: '/admin/report/parcels-report', type: 'link' },
                { icon: 'i-Management', name: 'Accounts', state: '/admin/report/accounts-report', type: 'link' },
                { icon: 'i-Business-Mens', name: 'Customers', state: '/admin/report/customers-report', type: 'link' },
                { icon: 'i-Ticket', name: 'Support-Ticket', state: '/admin/report/support-ticket-report', type: 'link' }
            ]
        },
        {
            name: 'Settings',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'link',
            icon: 'i-Gear',
            state: '/admin/setting',
        },

    ];
    posMenu: IMenuItem[] = [
        {
            name: 'POS Dashoard',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'link',
            icon: 'i-Bar-Chart',
            state: '/admin/dashboard',
        },
        {
            name: 'Delivery Boys',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'link',
            icon: 'i-Cool-Guy',
            state: '/admin/delivery-boys',
        },
        {
            name: 'Customers',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'link',
            icon: 'i-Business-Mens',
            state: '/admin/customers',
        },
        {
            name: 'Support Ticket',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'link',
            icon: 'i-Ticket',
            state: '/admin/supports',
        },
        {
            name: 'Parcels',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'link',
            icon: 'i-Box-Full',
            state: '/admin/parcels',
        },
        {
            name: 'Report',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'dropDown',
            icon: 'i-Receipt-3',
            sub: [
                { icon: 'i-Box-Full', name: 'Parcels', state: '/admin/report/parcels-report', type: 'link' },
                { icon: 'i-Management', name: 'Accounts', state: '/admin/report/accounts-report', type: 'link' },
                { icon: 'i-Business-Mens', name: 'Customers', state: '/admin/report/customers-report', type: 'link' },
                { icon: 'i-Ticket', name: 'Support-Ticket', state: '/admin/report/support-ticket-report', type: 'link' }
            ]
        },
        {
            name: 'Settings',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'link',
            icon: 'i-Gear',
            state: '/admin/setting',
        },

    ];

    // sets iconMenu as default;
    menuItems = new BehaviorSubject<IMenuItem[]>(this.superAdminMenu);
    // navigation component has subscribed to this Observable
    menuItems$ = this.menuItems.asObservable();

    // You can customize this method to supply different menu for
    // different user type.
    publishNavigationChange(menuType: string) {
        switch (this.userType) {
            case Role.admin:
                this.menuItems.next(this.superAdminMenu);
                break;
            case Role.psp:
                this.menuItems.next(this.pspMenu);
                break;
            case Role.pos:
                this.menuItems.next(this.posMenu);
                break;
            default:
                this.menuItems.next(this.defaultMenu);
        }
    }

}
