import { Component, OnInit } from "@angular/core";
import { openAdvancedUrl, AdvancedWebViewOptions } from 'nativescript-advanced-webview';

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
        const opts: AdvancedWebViewOptions = {
            url: 'https://angular-8u5t8q.stackblitz.io',
            toolbarColor: '#ffff66',
            toolbarControlsColor: '#333', // iOS only
            showTitle: false, // Android only
            isClosed: (res) => {
                console.log('closed it', res);
            }
        };
    
        openAdvancedUrl(opts);
    }
}
