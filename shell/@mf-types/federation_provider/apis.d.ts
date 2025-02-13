
    export type RemoteKeys = 'federation_provider/button' | 'federation_provider/header';
    type PackageType<T> = T extends 'federation_provider/header' ? typeof import('federation_provider/header') :T extends 'federation_provider/button' ? typeof import('federation_provider/button') :any;