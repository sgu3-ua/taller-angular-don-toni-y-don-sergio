import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-component',
    template: `<p>{{ msg }}</p>`,
    standalone: true,
})
export class AppComponent implements OnInit {
    title = 'appListas';
    msg = "Hola, bienvenido a mi proyecto en Angular";

    ngOnInit(): void {
        setTimeout(() => { this.msg = '' }, 5000);
    }
}