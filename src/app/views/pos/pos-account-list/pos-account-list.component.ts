import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import { RoleService } from 'src/app/shared/services/role-service.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LiveUpdateService } from 'src/app/shared/services/live-update.service';
@Component({
  selector: 'app-pos-account-list',
  templateUrl: './pos-account-list.component.html',
  styleUrls: ['./pos-account-list.component.scss']
})
export class PosAccountListComponent implements OnInit {
  displayedColumns = ['id', 'name', 'city', 'email', 'address', 'action'];
  dataSource: MatTableDataSource<User>;
  modalOption: NgbModalOptions = {};
  confirmResut: any;
  users: User[] = [];
  role:string;
  userId: number;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  isLoading = true;
  constructor(private modalService: NgbModal,
    private _userService: UserService,
    private _roleService: RoleService,
    public router: Router,
    public _liveUpdateService:LiveUpdateService
  ) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((data) => {
      return this.role = this._roleService.userType;
    });  
  }
  ngOnInit() {
    this._liveUpdateService.getUpdate().subscribe(success=>{
      this.getAllPOSdata();
    });
    this.getAllPOSdata();
  }
  
  getAllPOSdata(){
    this._userService.getAllPOS().subscribe((data: any) => {
      this.isLoading = false;
      this.users = data.success;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => { this.isLoading = false })
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
 /* open(content,id :number) {
    this.userId=id;
    this.modalOption.backdrop = 'static';
    this.modalOption.keyboard = false;
    this.modalOption.windowClass = 'edit-modal right animated fadeInRight';
    this.modalService.open(content, this.modalOption)
      .result.then((result) => {
        console.log(this.userId);
        this.userId = id;
      }, (reason) => {
      });
  } */
  confirm(content,id:number) {
    this.userId=id;
    console.log(this.userId);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true })
      .result.then((result) => {
        this._userService.deleteUser(this.userId).subscribe(success=>{
          this._liveUpdateService.setUpdate("delete")
          console.log("User Deleted Sucessfully");
        },error => { console.log("User Deleted Sucessfully")})
      }, (reason) => {
        this.confirmResut = `Dismissed with: ${reason}`;
      });
  }
}
