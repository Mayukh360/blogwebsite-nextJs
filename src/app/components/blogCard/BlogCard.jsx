import React from "react";
import classes from "./BlogCard.module.css";
import Link from "next/link";
import Image from "next/image";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";

export default function BlogCard({ blog: { title, desc, img } }) {
  const isLiked = true;
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link className={classes.imgContainer} href={`/`}>
          <Image src={img} width="350" height="350" />
        </Link>
        <div className={classes.blogData}>
          <div className={classes.left}>
            <h3 className={title}></h3>
            <p>{desc}</p>
            <div className={classes.right}>
              {12}{" "}
              {isLiked ? <AiFillLike size={20} /> : <AiOutlineLike size={20} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
