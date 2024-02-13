CREATE TABLE public.users
(
    userid character varying NOT NULL,
    name character varying NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    PRIMARY KEY (userid)
);

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;