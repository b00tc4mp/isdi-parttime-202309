CREATE TABLE public.posts
(
    postid character varying NOT NULL,
    userid character varying NOT NULL,
    title character varying NOT NULL,
    authorid character varying NOT NULL,
    likes character varying NOT NULL,
    comments character varying NOT NULL,
    saved character varying NOT NULL,
    PRIMARY KEY (postid)
);

ALTER TABLE IF EXISTS public.posts
    OWNER to postgres;