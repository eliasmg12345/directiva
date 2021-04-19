// I1 generar la directiva en la terminal escribiendo
//  ng generate directive directivas/Subrayado --skipTests

// K2 LO PRimero es traerme el HostListener luego voy a aplicar sobre un metodo en concreto K3
import { Directive, ElementRef, Renderer2 ,HostListener, HostBinding, Input} from '@angular/core';

//I2 se genera un decoracor Directive
@Directive({
  // I3 esta propiedad llamada selector es como la propiedad de los componentes
  // es decir [appSubrayado] es  la directiva que quiero utilizar en cualquiera de
  // mis componentes...se esta poniendo entre corchetes para avisasr que seva
  // utilizar un atributo HTML 
  selector: '[subrayado]'
})
export class SubrayadoDirective {

  //M2 ponremos el valor config de tipo any ...y en el constructor 
  // vamos a darle los valores por defecto
  @Input('subrayado') config:any;

  // L2 este decorador lo vamos aplicar a nivel de propiedad..dentro tengo que poner el 
  // atributo del elemento con el cual estoy interactuando que quiero modificar ejm class
  // quiero aplicar una clase en el caso de tener el raton encima y otra clase de no tenerlo encima
  // a por lo tanto a esta propiedad le voy a llamar isHover
  @HostBinding('class') isHover:string;


  // I3 inyectando un objeto de tipo elemento como parametro
  // angular se encarga por nosotros de inyectarnos aqui como parametro
  // una referencia una instancia sobre la cual estamos aplicando esta directiva
  // EJM puedo poner el nombre que yo quiera ...elem:ElementRef no ovlidar que
  // arriba se importa el ElementRef

  // este elem hace referecia al objeto al cual estamos aplicando la directiva
  // por ejemplo al contenido  del html  component.html I4

  // J3  RENDERER nos permite hacer esto mismo indepen de la plataforma
  // lo primero que tenemos que hacer es trar la instancia del renderer
  // lo mismo que ElementRef angular se encarga en este caso me traigo el Renderer2
  constructor(private elem:ElementRef,private renderer:Renderer2) { 
    // I5 si quiero cambiar al estilo elem.nativeElement
    // een este caso el estilo para que me lo subraye simplemente tengo que 
    // modificar su propiedad .style de su propiedad style el .textDecoration
    // le pongo el valor underLine
    // elem.nativeElement.style.textDecoration='underLine';

    // J4 comentamos la linea de arriba y utlizaremos el renderer nuevo
    // usamos un metodo qu es el setStyle y lo que tengo que decir es sobre
    // que elemento voy a aplicar en este caso sobre elem.nativeElement luego 
    // que propiedad quiero modificar en este caso text-decoration y el valor que
    // le quiero dar a esa propiedad en este caso underLine etccc
    renderer.setStyle(elem.nativeElement,'text-decoration','underLine');
    renderer.setStyle(elem.nativeElement,'color','green');

    // M2 valores por defecto...this.config va a ser in objeto que va a tener la clave
    // por ejemplo colorHover y colorNoHover...y lo puedo utilizar para cualquier campo
    // por ejemplo en M3
    this.config={
      colorHover:'yellow',
      colorNoHover:'red'
    }
  }

  // K3 entre parentesis le digo que evento quiero capturar en este caso mouseover
  // quiero enterearme cuando el raton pasa sobre encima del elemento a cual estoy
  // aplicando la directiva y se lo puedo apliar sobre un metodo en concreto 
  // por ejemplo l puedo llamar onHover()...este onHover() lo que hace es activarse
  // o balanzarce uando detecte que el raton  ....aqui puedo hacer muchas cosas
  // como cambiar el colo etc...y el mouseout onMouseOut hace que salga 
  @HostListener('mouseover') onHover(){
    // this.renderer.setStyle(this.elem.nativeElement,'text-decoration','');

    // M3 comentando lo de arriba para usar el this.config.coloHover
    this.renderer.setStyle(this.elem.nativeElement,'color',this.config.colorHover);

    // L3 cuando sea mouseover este isHover lo voy a poner que se aplique a la clase hover
    // es decir cuando el raton este encima la propiedad @HostBinding('class') que lo que hace
    // es modificar el atributo class del parrafo afectado por la directiva va a tener este valor hover
    this.isHover='hover';
  }
  @HostListener('mouseout') onMouseOut(){
    this.renderer.setStyle(this.elem.nativeElement,'text-decoration','underLine');

    // M4 comentando lo de arriba para usar el this.config.colorNoHover 
    // ahora para que sea diferente cuando aplico l directiva ...en html  M5
    this.renderer.setStyle(this.elem.nativeElement,'color',this.config.colorNoHover);

    // L4 cuando el raton salga le voy a poner otra clase...ahora nos vamos al L5 css
    this.isHover='noHover';
  }

}
