import { Constructor } from "../types";
import { IControllerAdapter } from "../fastify-adapter/interface/controller-adapter.interface";
import { IServiceAdapter } from "../fastify-adapter/interface/service-adapter.interface";
import { IAdapter } from "./interface/adapter.interface";
import { IController } from "./interface/controller.interface";
import { IModuleManagerClass } from "./interface/module-class-manager.interface";
import { IModule } from "./interface/module.interface";
import { IService } from "./interface/service.interface";

export class AppBootstrapper {
  constructor(
    private serviceAdapter: IServiceAdapter,
    private controllerAdapter: IControllerAdapter
  ) {}

  // use unknown
  start(AppModule: any) {
    new (AppModule as IModuleManagerClass)()
      .getInstance()
      .load(this.serviceAdapter, this.controllerAdapter);
  }

  emitReady() {
    this.serviceAdapter.emitReady();
  }
  emitStart() {
    this.serviceAdapter.emitStart();
  }
  emitClose() {
    this.serviceAdapter.emitClose();
  }
}
