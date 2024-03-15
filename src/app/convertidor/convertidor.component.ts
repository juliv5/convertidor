import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-convertidor',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './convertidor.component.html',
  styleUrl: './convertidor.component.scss',
})
export class ConvertidorComponent {
  cantidad: number = 0;
  tengo: string = 'USD';
  quiero: string = 'EUR';
  total: number = 0;

  monedas: string[] = ['USD', 'EUR', 'LIBRA'];

  constructor() {}
  ngOnInit(): void {}
  convertir(): void {
    switch (this.tengo) {
      case 'USD':
        if (this.quiero === 'USD') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad * 0.92;
        }
        if (this.quiero === 'LIBRA') {
          this.total = this.cantidad * 0.79;
        }
        break;
      case 'EUR':
        if (this.quiero === 'EUR') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 1.09;
        }
        if (this.quiero === 'LIBRA') {
          this.total = this.cantidad * 0.86;
        }
        break;
      case 'LIBRA':
        if (this.quiero === 'LIBRA') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 1.27;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad * 1.17;
        }
        break;
    }
  }
}
