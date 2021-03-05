import { ApiController, Request, Response } from '@libs/core';
import { Controller, Get, Req, Res, Post, HttpException, HttpStatus} from '@nestjs/common';
import { basegoogleService } from '../services'
@Controller()
export class basegoogleController extends ApiController {
  constructor(private readonly basegoogle: basegoogleService){
    super();
  }
  
  /*   Default Optional */
  @Get('')
  async intro(
  @Req() req: Request,
  @Res() res: Response):Promise<Response>{
    return res.success("Hey! please visit https://github.com/Meetmetha/fastauth for details")
  }

  /*   Signup user to Google Send below json email and password
  { "email":"usermail@gmail.com","password":"userpass"  }
  */

  @Post('register')
  async registeuser(
  @Req() req: Request,
  @Res() res: Response):Promise<Response>{
    try{
      const registration = await this.basegoogle.register(req.all());
      return res.success(registration)
    }catch{
      throw new HttpException('Invalid Format', HttpStatus.BAD_REQUEST);
    }
  }

  /* Login user to Google via verifypassword Send below json email and password
  { "email":"usermail@gmail.com","password":"userpass" }
  */

 @Post('login')
 async loginuser(
 @Req() req: Request,
 @Res() res: Response):Promise<Response>{
   try{
    const loggeduser = await this.basegoogle.login(req.all());
    return res.success(loggeduser)
   }catch{
    throw new HttpException('User Exists', HttpStatus.BAD_REQUEST);
   }
 }

  /*  Send above recieved "idToken" after registration to get user info from google
  {  "idToken":"TokenHere"  }
  */
  @Post('userinfo')
  async userinfo(
  @Req() req: Request,
  @Res() res: Response):Promise<Response>{
    try{
      const userinfo = await this.basegoogle.usergetinfo(req.all());
      return res.success(userinfo)
     }catch{
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
     }
  }

  /*  Send recieved "refreshtoken" to check for user session and get latest
  { "refresh_token":"TokenHere" }
  */
  @Post('sync')
  async synctoken(
    @Req() req: Request,
    @Res() res: Response):Promise<Response>{
      try{
        const usersync = await this.basegoogle.syncuser(req.all());
        return res.success(usersync)
       }catch{
        throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
       }
  }

  /* Send this to get Email verification for user 
  { "idToken":"TokenHere" }
  */
  @Post('emailverify')
  async emailverify(
    @Req() req: Request,
    @Res() res: Response):Promise<Response>{
      try{
        const mailveri = await this.basegoogle.mailverify(req.all());
        return res.success(mailveri)
       }catch{
        throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
       }
  }
}