import { Module, HttpModule } from '@nestjs/common';
import { basegoogleController } from './controllers';
import { basegoogleService } from './services/basegoogleService';

@Module({
  imports: [HttpModule],
  controllers: [basegoogleController],
  providers:[basegoogleService]
})
export class BasegoogleModule {}
