import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IComment } from 'src/app/interface/comment';
import { IProduct } from 'src/app/interface/product';
import { IUser } from 'src/app/interface/user';
import { CategoriesServiceService } from 'src/app/services/categories-service.service';
import { CommentService } from 'src/app/services/comment.service';
import { ProductsService } from 'src/app/services/products.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id: string | undefined
  product: IProduct | undefined
  categories: any[] = [];
  name: string | undefined
  price: number | undefined
  desc: string | undefined
  author: string | undefined
  id_category: string | undefined
  image: string | undefined
  selectedStars: number = 1;
  content: string = ""
  comments: IComment[] = []
  users:IUser[]=[]
  constructor(private userService:UsersService,private productService: ProductsService, private router: Router, private route: ActivatedRoute, private categoryService: CategoriesServiceService, private commentService: CommentService) {

  }
  ngOnInit() {
    this.getUsers()
    this.loadCategories();
    this.getComment()
    this.route.params.subscribe(
      params => {
        this.id = params["id"]
        this.productService.getProductById(this.id!).subscribe(
          (data) => {
            this.product = data;
            this.name = data.name || '';
            this.price = data.price;
            this.desc = data.desc || '';
            this.author = data.author || '';
            this.id_category = data.id_category || '';
            this.image = data.image || '';
          }
        )
      }
    )
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      }
    );
  }

  onSelect(stars: number): void {
    this.selectedStars = stars;
  }
  loadCategories() {
    this.categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }
  getCategoryName(categoryId: string): string {
    const category = this.categories.find(category => category.id === categoryId);
    return category ? category.name : 'Unknown Category';
  }
  comment() {
    const comment = {
      content: this.content!,
      id_product: this.id!,
      id_user: String(localStorage.getItem("id")),
      star: this.selectedStars
    }
    this.commentService.addComment(comment).subscribe(
      () => window.location.reload()
    )

  }
  getComment() {
    this.commentService.getComments().subscribe(
      (data) => {
        this.comments = data;
      }
    );
  }
  getUserName(userId: string): string {
    const user = this.users.find(user => user.id === userId);
    return user ? user.name : 'Unknown User';
  }
}
