CREATE TABLE public.user_storage_book
(
    userid character varying NOT NULL,
    storageid character varying NOT NULL,
    postid character varying NOT NULL,
    PRIMARY KEY (postid)
);

ALTER TABLE IF EXISTS public.user_storage_book
    OWNER to postgres;