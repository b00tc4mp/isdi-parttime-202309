CREATE TABLE public.user_comment_post
(
    userid character varying NOT NULL,
    postid character varying NOT NULL,
    comment character varying NOT NULL,
    PRIMARY KEY (userid)
);

ALTER TABLE IF EXISTS public.user_comment_post
    OWNER to postgres;