import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    // OPTION with route params

    // const serverId = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(serverId);
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     // this.server = this.serversService.getServer(Number(params['id']));
    //     this.server = this.serversService.getServer(+params['id']);
    //   }
    // );

    // OPTION with resolver in routing
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['serverProp'];
      });
  }

  onEdit() {
    // this.router.navigate(['/servers', this.server.id, 'edit']);
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
