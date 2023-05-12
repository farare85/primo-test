import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDetail {
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  emailAddress: string;
}
