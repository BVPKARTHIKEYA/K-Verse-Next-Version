import * as adobeXd from '/public/svg/skills/adobe-xd.svg';
import adobeaudition from '/public/svg/skills/adobeaudition.svg';
import angular from '/public/svg/skills/angular.svg';
import blender from '/public/svg/skills/blender.svg';
import bootstrap from '/public/svg/skills/bootstrap.svg';
import c from '/public/svg/skills/c.svg';
import canva from '/public/svg/skills/canva.svg';
import coffeescript from '/public/svg/skills/coffeescript.svg';
import cplusplus from '/public/svg/skills/cplusplus.svg';
import css from '/public/svg/skills/css.svg';
import django from '/public/svg/skills/django.svg';
import docker from '/public/svg/skills/docker.svg';
import illustrator from '/public/svg/skills/illustrator.svg';
import java from '/public/svg/skills/java.svg';
import javascript from '/public/svg/skills/javascript.svg';
import lightroom from '/public/svg/skills/lightroom.svg';
import markdown from '/public/svg/skills/markdown.svg';
import materialui from '/public/svg/skills/materialui.svg';
import matlab from '/public/svg/skills/matlab.svg';
import microsoftoffice from '/public/svg/skills/microsoftoffice.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import mysql from '/public/svg/skills/mysql.svg';
import nextJS from '/public/svg/skills/nextJS.svg';
import nginx from '/public/svg/skills/nginx.svg';
import numpy from '/public/svg/skills/numpy.svg';
import opencv from '/public/svg/skills/opencv.svg';
import photoshop from '/public/svg/skills/photoshop.svg';
import php from '/public/svg/skills/php.svg';
import picsart from '/public/svg/skills/picsart.svg';
import postgresql from '/public/svg/skills/postgresql.svg';
import premierepro from '/public/svg/skills/premierepro.svg';
import python from '/public/svg/skills/python.svg';
import pytorch from '/public/svg/skills/pytorch.svg';
import react from '/public/svg/skills/react.svg';
import ruby from '/public/svg/skills/ruby.svg';
import sketch from '/public/svg/skills/sketch.svg';
import swift from '/public/svg/skills/swift.svg';
import tailwind from '/public/svg/skills/tailwind.svg';
import tensorflow from '/public/svg/skills/tensorflow.svg';
import typescript from '/public/svg/skills/typescript.svg';
import vitejs from '/public/svg/skills/vitejs.svg';
import webix from '/public/svg/skills/webix.svg';
import wordpress from '/public/svg/skills/wordpress.svg';
import html from '/public/svg/skills/html.svg';
import svelte from '/public/svg/skills/svelte.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'photoshop':
      return photoshop;
    case 'docker':
      return docker;
    case 'illustrator':
      return illustrator;
    case 'adobe xd':
      return adobeXd;
    case 'css':
      return css;
    case 'angular':
      return angular;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'react':
      return react;
    case 'svelte':
      return svelte;
    case 'typescript':
      return typescript;
    case 'bootstrap':
      return bootstrap;
    case 'coffeescript':
      return coffeescript;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'c':
      return c;
    case 'cplusplus':
      return cplusplus;
    case 'java':
      return java;
    case 'matlab':
      return matlab;
    case 'php':
      return php;
    case 'python':
      return python;
    case 'ruby':
      return ruby;
    case 'swift':
      return swift;
    case 'adobe audition':
      return adobeaudition;
    case 'lightroom':
      return lightroom;
    case 'materialui':
      return materialui;
    case 'nginx':
      return nginx;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'premiere pro':
      return premierepro;
    case 'pytorch':
      return pytorch;
    case 'sketch':
      return sketch;
    case 'tensorflow':
      return tensorflow;
    case 'webix':
      return webix;
    case 'wordpress':
      return wordpress;
    case 'blender':
      return blender;
    case 'markdown':
      return markdown;
    case 'microsoftoffice':
      return microsoftoffice;
    case 'picsart':
      return picsart;
    case 'canva':
      return canva;
    default:
      break;
  }
}
