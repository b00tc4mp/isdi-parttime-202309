CREATE TABLE public.books
(
    bookid character varying NOT NULL,
    title character varying NOT NULL,
    authorid character varying NOT NULL,
    gender character varying NOT NULL,
    year date NOT NULL,
    PRIMARY KEY (bookid)
);

ALTER TABLE IF EXISTS public.books
    OWNER to postgres;