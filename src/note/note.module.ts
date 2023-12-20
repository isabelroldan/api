import { Module } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';

@Module({
    controllers: [NoteController],
    providers: [NoteService,AppService],
})
export class NoteModule {}
