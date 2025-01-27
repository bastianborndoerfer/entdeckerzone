import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatCard} from '@angular/material/card';
import {Router} from '@angular/router';


declare const paypal: any;

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  standalone: true,
  imports: [
    MatCard
  ],
  styleUrl: './paypal.component.css'
})
export class PaypalComponent implements OnInit {
  @ViewChild('paypal', {static: true}) paypalElement!: ElementRef;

  product = {
    price: 25,
    description: 'töpferkurs für klein und groß',
    img: 'assets/volume.jpg'
  };

  paidFor = false;

  ngOnInit() {
    paypal
      .Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.product.description,
                amount: {
                  currency_code: 'EUR',
                  value: this.product.price
                }
              }
            ]
          });
        },
        onApprove: async (data: any, actions: any) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          console.log(order);
        },
        onError: (err: any) => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }

  constructor(private router: Router) {
  }

  navigateToCourses() {
    this.router.navigate(['']);
  }
}
