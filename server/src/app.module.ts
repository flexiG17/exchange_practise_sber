import {Module} from '@nestjs/common';
import {UserModule} from './user/user.module';
import {UniversityModule} from './university/university.module';
import {EnterpriseModule} from './enterprise/enterprise.module';
import {AuthModule} from './auth/auth.module';
import {RequestModule} from './request/request.module';
import {ProgramModule} from './program/program.module';

@Module({
    imports: [
        AuthModule,
        UserModule,
        UniversityModule,
        EnterpriseModule,
        RequestModule,
        ProgramModule,
    ],
})
export class AppModule {
}
