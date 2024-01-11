import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Producto } from 'src/app/models/producto.model';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  producto: Producto[] = [];
  productoSub: Subscription | undefined

  constructor(private productosService: ProductosService) {}
  ngOnInit(): void {
    this.productoSub = this.productosService.getProducto()
    .subscribe({
      next: ( producto: Producto[] ) => {
        this.producto = producto
        console.log(this.producto)
      },
      error: ( err: any ) => {
        console.error(err)
      },
      complete: () => {
        console.log('Completado')
      }
    })
  }

    ngOnDestroy(): void {
      this.productoSub?.unsubscribe();
  }

}
