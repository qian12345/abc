import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { QianAppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(QianAppModule);