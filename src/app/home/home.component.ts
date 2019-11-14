import { Component, OnInit } from "@angular/core";
// import { openAdvancedUrl, AdvancedWebViewOptions } from 'nativescript-advanced-webview';

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    launch() {
        // const opts = {
        //     url: 'https://angular-8u5t8q.stackblitz.io'
        // };
    
        // openAdvancedUrl(opts);
    }
}
