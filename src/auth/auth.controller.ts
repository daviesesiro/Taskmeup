import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(
    @Body(ValidationPipe) authcredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    return this.authService.signUp(authcredentialsDto);
  }

  @Post('/signin')
  async signIn(
    @Body(ValidationPipe) authcredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    return this.authService.signIn(authcredentialsDto);
  }
}