declare const _default: (() => {
    jwt: {
        secret: string;
        ttl: string;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost;
export default _default;
