'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallRect = wall.getBoundingClientRect();
const spiderRect = spider.getBoundingClientRect();

const centerX = (wallRect.width - spiderRect.width) / 2;
const centerY = (wallRect.height - spiderRect.height) / 2;

spider.style.top = `${centerX}px`;
spider.style.left = `${centerY}px`;
