import { App } from 'vue';
import { Router } from 'vue-router';

type CreateVueAppFunction = () => Promise<{
    app: App;
    router: Router;
}>;

export type { CreateVueAppFunction as C };
