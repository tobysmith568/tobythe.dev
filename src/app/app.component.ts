import { Component, OnInit } from "@angular/core";
import { codeSlash, logoGithub } from "ionicons/icons";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public websiteLogo: SafeUrl;
  public gitHubLogo: SafeUrl;

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.websiteLogo = this.domSanitizer.bypassSecurityTrustUrl(codeSlash);
    this.gitHubLogo = this.domSanitizer.bypassSecurityTrustUrl(logoGithub);
  }
}
