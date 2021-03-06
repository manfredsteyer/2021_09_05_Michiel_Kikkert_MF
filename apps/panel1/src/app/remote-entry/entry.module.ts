import { CommonModule } from '@angular/common';
import { ComponentFactory, ComponentFactoryResolver, NgModule } from '@angular/core';
import { RemoteEntryComponent } from './entry.component';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule
  ],
  providers: [],
})
export class RemoteEntryModule {
    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    public resolveComponent(): ComponentFactory<RemoteEntryComponent> {
        return this.componentFactoryResolver.resolveComponentFactory(RemoteEntryComponent);
    }
}
