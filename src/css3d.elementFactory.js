/**
 * CSS 3D engine
 *
 * @category    css3d
 * @package     css3d.elementFactory
 * @author      Jan Fischer, bitWorking <info@bitworking.de>
 * @copyright   2014 Jan Fischer
 * @license     http://www.opensource.org/licenses/mit-license.html  MIT License
 */

/**
 * 
 * @namespace
 */
css3d.elementFactory = {

    /**
     * 
     * @param {DOMElement} container
     * @param {css3d.scene} scene
     * @param {Number} size
     * @param {String|null} id
     * @param {String|null} className
     * @param {Boolean|null} backfaceCulling
     * @param {Boolean|null} shading
     * @returns {css3d.element} This is the parent element
     */
    cube : function(container, scene, size, id, className, backfaceCulling, shading)
    {
        var translation = size/2;

        var elementGroup = new css3d.element();
        elementGroup.setTranslation(0, 0, -translation);

        var backDiv = document.createElement('div');
        backDiv.style.position = 'absolute';
        backDiv.style.width = size+'px';
        backDiv.style.height = size+'px';
        container.appendChild(backDiv);

        var frontDiv = document.createElement('div');
        frontDiv.style.position = 'absolute';
        frontDiv.style.width = size+'px';
        frontDiv.style.height = size+'px';
        container.appendChild(frontDiv);

        var leftDiv = document.createElement('div');
        leftDiv.style.position = 'absolute';
        leftDiv.style.width = size+'px';
        leftDiv.style.height = size+'px';
        container.appendChild(leftDiv);

        var rightDiv = document.createElement('div');
        rightDiv.style.position = 'absolute';
        rightDiv.style.width = size+'px';
        rightDiv.style.height = size+'px';
        container.appendChild(rightDiv);

        var topDiv = document.createElement('div');
        topDiv.style.position = 'absolute';
        topDiv.style.width = size+'px';
        topDiv.style.height = size+'px';
        container.appendChild(topDiv);

        var bottomDiv = document.createElement('div');
        bottomDiv.style.position = 'absolute';
        bottomDiv.style.width = size+'px';
        bottomDiv.style.height = size+'px';
        container.appendChild(bottomDiv);

        if (id) {
            backDiv.id = id+'-back';
            frontDiv.id = id+'-front';
            leftDiv.id = id+'-left';
            rightDiv.id = id+'-right';
            topDiv.id = id+'-top';
            bottomDiv.id = id+'-bottom';
        }
        if (className) {
            backDiv.className = className+' '+className+'-back';
            frontDiv.className = className+' '+className+'-front';
            leftDiv.className = className+' '+className+'-left';
            rightDiv.className = className+' '+className+'-right';
            topDiv.className = className+' '+className+'-top';
            bottomDiv.className = className+' '+className+'-bottom';
        }

        backfaceCulling = (backfaceCulling == null) ? true : backfaceCulling;
        shading = (shading == null) ? true : shading;

        var back = new css3d.element(backDiv);
        back.setBackfaceCulling(backfaceCulling);
        back.shading = shading;
        back.setTranslation(0, 0, -translation);
        back.setRotation({x:0, y:1, z:0}, Math.PI);
        back.inheritScaling = true;

        var front = new css3d.element(frontDiv);
        front.setBackfaceCulling(backfaceCulling);
        front.shading = shading;
        front.setTranslation(0, 0, translation);
        front.inheritScaling = true;

        var left = new css3d.element(leftDiv);
        left.setBackfaceCulling(backfaceCulling);
        left.shading = shading;
        left.setRotation({x:0, y:1, z:0}, -Math.PI/2);
        left.setTranslation(-translation, 0, 0);
        left.inheritScaling = true;

        var right = new css3d.element(rightDiv);
        right.setBackfaceCulling(backfaceCulling);
        right.shading = shading;
        right.setRotation({x:0, y:1, z:0}, Math.PI/2);
        right.setTranslation(translation, 0, 0);
        right.inheritScaling = true;

        var top = new css3d.element(topDiv);
        top.setBackfaceCulling(backfaceCulling);
        top.shading = shading;
        top.setRotation({x:1, y:0, z:0}, Math.PI/2);
        top.setTranslation(0, -translation, 0);
        top.inheritScaling = true;

        var bottom = new css3d.element(bottomDiv);
        bottom.setBackfaceCulling(backfaceCulling);
        bottom.shading = shading;
        bottom.setRotation({x:1, y:0, z:0}, -Math.PI/2);
        bottom.setTranslation(0, translation, 0);
        bottom.inheritScaling = true;

        back.setParent(elementGroup);
        front.setParent(elementGroup);
        left.setParent(elementGroup);
        right.setParent(elementGroup);
        top.setParent(elementGroup);
        bottom.setParent(elementGroup);

        scene.addElement(elementGroup);
        scene.addElement(back);
        scene.addElement(front);
        scene.addElement(left);
        scene.addElement(right);
        scene.addElement(top);
        scene.addElement(bottom);

        return elementGroup;
    },
    
    /**
     * 
     * @param {DOMElement} container
     * @param {css3d.scene} scene
     * @param {Number} width
     * @param {Number} height
     * @param {Number} depth
     * @param {String|null} id
     * @param {String|null} className
     * @param {Boolean|null} backfaceCulling
     * @param {Boolean|null} shading
     * @param {Boolean|null} addTopAndBottom
     * @returns {css3d.element} This is the parent element
     */
    cuboid : function(container, scene, width, height, depth, id, className, backfaceCulling, shading, addTopAndBottom)
    {
        var translationX = width/2;
        var translationY = height/2;
        var translationZ = depth/2;
        
        addTopAndBottom = (addTopAndBottom == null) ? true : addTopAndBottom;

        var elementGroup = new css3d.element();
        elementGroup.setTranslation(0, 0, -translationZ);

        var backDiv = document.createElement('div');
        backDiv.style.position = 'absolute';
        backDiv.style.width = width+'px';
        backDiv.style.height = height+'px';
        container.appendChild(backDiv);

        var frontDiv = document.createElement('div');
        frontDiv.style.position = 'absolute';
        frontDiv.style.width = width+'px';
        frontDiv.style.height = height+'px';
        container.appendChild(frontDiv);

        var leftDiv = document.createElement('div');
        leftDiv.style.position = 'absolute';
        leftDiv.style.width = depth+'px';
        leftDiv.style.height = height+'px';
        container.appendChild(leftDiv);

        var rightDiv = document.createElement('div');
        rightDiv.style.position = 'absolute';
        rightDiv.style.width = depth+'px';
        rightDiv.style.height = height+'px';
        container.appendChild(rightDiv);

        if (addTopAndBottom) {
            var topDiv = document.createElement('div');
            topDiv.style.position = 'absolute';
            topDiv.style.width = width+'px';
            topDiv.style.height = depth+'px';
            container.appendChild(topDiv);

            var bottomDiv = document.createElement('div');
            bottomDiv.style.position = 'absolute';
            bottomDiv.style.width = width+'px';
            bottomDiv.style.height = depth+'px';
            container.appendChild(bottomDiv);
        }

        if (id) {
            backDiv.id = id+'-back';
            frontDiv.id = id+'-front';
            leftDiv.id = id+'-left';
            rightDiv.id = id+'-right';
            if (addTopAndBottom) {
                topDiv.id = id+'-top';
                bottomDiv.id = id+'-bottom';
            }
        }
        if (className) {
            backDiv.className = className+' '+className+'-back';
            frontDiv.className = className+' '+className+'-front';
            leftDiv.className = className+' '+className+'-left';
            rightDiv.className = className+' '+className+'-right';
            if (addTopAndBottom) {
                topDiv.className = className+' '+className+'-top';
                bottomDiv.className = className+' '+className+'-bottom';
            }
        }

        backfaceCulling = (backfaceCulling == null) ? true : backfaceCulling;
        shading = (shading == null) ? true : shading;

        var back = new css3d.element(backDiv);
        back.setBackfaceCulling(backfaceCulling);
        back.shading = shading;
        back.setTranslation(0, 0, -translationZ);
        back.setRotation({x:0, y:1, z:0}, Math.PI);
        back.inheritScaling = true;

        var front = new css3d.element(frontDiv);
        front.setBackfaceCulling(backfaceCulling);
        front.shading = shading;
        front.setTranslation(0, 0, translationZ);
        front.inheritScaling = true;

        var left = new css3d.element(leftDiv);
        left.setBackfaceCulling(backfaceCulling);
        left.shading = shading;
        left.setRotation({x:0, y:1, z:0}, -Math.PI/2);
        left.setTranslation(-translationX, 0, 0);
        left.inheritScaling = true;

        var right = new css3d.element(rightDiv);
        right.setBackfaceCulling(backfaceCulling);
        right.shading = shading;
        right.setRotation({x:0, y:1, z:0}, Math.PI/2);
        right.setTranslation(translationX, 0, 0);
        right.inheritScaling = true;

        if (addTopAndBottom) {
            var top = new css3d.element(topDiv);
            top.setBackfaceCulling(backfaceCulling);
            top.shading = shading;
            top.setRotation({x:1, y:0, z:0}, Math.PI/2);
            top.setTranslation(0, -translationY, 0);
            top.inheritScaling = true;

            var bottom = new css3d.element(bottomDiv);
            bottom.setBackfaceCulling(backfaceCulling);
            bottom.shading = shading;
            bottom.setRotation({x:1, y:0, z:0}, -Math.PI/2);
            bottom.setTranslation(0, translationY, 0);
            bottom.inheritScaling = true;
        }

        back.setParent(elementGroup);
        front.setParent(elementGroup);
        left.setParent(elementGroup);
        right.setParent(elementGroup);
        if (addTopAndBottom) {
            top.setParent(elementGroup);
            bottom.setParent(elementGroup);
        }
        
        scene.addElement(elementGroup);
        scene.addElement(back);
        scene.addElement(front);
        scene.addElement(left);
        scene.addElement(right);
        if (addTopAndBottom) {
            scene.addElement(top);
            scene.addElement(bottom);
        }
        
        return elementGroup;
    },

    /**
     * Build cube from DOM Elements
     * 
     * @param {css3d.scene} scene
     * @param {Number} size
     * @param {DOMElement} backE
     * @param {DOMElement} frontE
     * @param {DOMElement} leftE
     * @param {DOMElement} rightE
     * @param {DOMElement} topE
     * @param {DOMElement} bottomE
     * @param {Boolean|null} backfaceCulling
     * @param {Boolean|null} shading
     * @returns {css3d.element} This is the parent element
     */
    cubeElements : function(scene, size, backE, frontE, leftE, rightE, topE, bottomE, backfaceCulling, shading)
    {
        var translation = size/2;

        var elementGroup = new css3d.element();
        elementGroup.setTranslation(0, 0, -translation);

        backE.style.position = 'absolute';
        frontE.style.position = 'absolute';
        leftE.style.position = 'absolute';
        rightE.style.position = 'absolute';
        topE.style.position = 'absolute';
        bottomE.style.position = 'absolute';

        backfaceCulling = (backfaceCulling == null) ? true : backfaceCulling;
        shading = (shading == null) ? true : shading;

        var back = new css3d.element(backE);
        back.setBackfaceCulling(backfaceCulling);
        back.shading = shading;
        back.setTranslation(0, 0, -translation);
        back.setRotation({x:0, y:1, z:0}, Math.PI);
        back.inheritScaling = true;

        var front = new css3d.element(frontE);
        front.setBackfaceCulling(backfaceCulling);
        front.shading = shading;
        front.setTranslation(0, 0, translation);
        front.inheritScaling = true;

        var left = new css3d.element(leftE);
        left.setBackfaceCulling(backfaceCulling);
        left.shading = shading;
        left.setRotation({x:0, y:1, z:0}, -Math.PI/2);
        left.setTranslation(-translation, 0, 0);
        left.inheritScaling = true;

        var right = new css3d.element(rightE);
        right.setBackfaceCulling(backfaceCulling);
        right.shading = shading;
        right.setRotation({x:0, y:1, z:0}, Math.PI/2);
        right.setTranslation(translation, 0, 0);
        right.inheritScaling = true;

        var top = new css3d.element(topE);
        top.setBackfaceCulling(backfaceCulling);
        top.shading = shading;
        top.setRotation({x:1, y:0, z:0}, Math.PI/2);
        top.setTranslation(0, -translation, 0);
        top.inheritScaling = true;

        var bottom = new css3d.element(bottomE);
        bottom.setBackfaceCulling(backfaceCulling);
        bottom.shading = shading;
        bottom.setRotation({x:1, y:0, z:0}, -Math.PI/2);
        bottom.setTranslation(0, translation, 0);
        bottom.inheritScaling = true;

        back.setParent(elementGroup);
        front.setParent(elementGroup);
        left.setParent(elementGroup);
        right.setParent(elementGroup);
        top.setParent(elementGroup);
        bottom.setParent(elementGroup);

        scene.addElement(elementGroup);
        scene.addElement(back);
        scene.addElement(front);
        scene.addElement(left);
        scene.addElement(right);
        scene.addElement(top);
        scene.addElement(bottom);

        return elementGroup;
    },

    /* test with container element and native css transformation */
    cube2 : function(container, css3dInstance, scene, size, id, className)
    {
        var translation = size/2;

        var mainDiv = document.createElement('div');
        mainDiv.style.position = 'absolute';
        mainDiv.style[css3dInstance._styleTransformStyle] = 'preserve-3d';
        container.appendChild(mainDiv);

        var backDiv = document.createElement('div');
        backDiv.style.position = 'absolute';
        mainDiv.appendChild(backDiv);

        var frontDiv = document.createElement('div');
        frontDiv.style.position = 'absolute';
        mainDiv.appendChild(frontDiv);

        var leftDiv = document.createElement('div');
        leftDiv.style.position = 'absolute';
        mainDiv.appendChild(leftDiv);

        var rightDiv = document.createElement('div');
        rightDiv.style.position = 'absolute';
        mainDiv.appendChild(rightDiv);

        var topDiv = document.createElement('div');
        topDiv.style.position = 'absolute';
        mainDiv.appendChild(topDiv);

        var bottomDiv = document.createElement('div');
        bottomDiv.style.position = 'absolute';
        mainDiv.appendChild(bottomDiv);

        if (id) {
            mainDiv.id = id+'-main';
            backDiv.id = id+'-back';
            frontDiv.id = id+'-front';
            leftDiv.id = id+'-left';
            rightDiv.id = id+'-right';
            topDiv.id = id+'-top';
            bottomDiv.id = id+'-bottom';
        }
        if (className) {
            mainDiv.className = className+' '+className+'-main';
            backDiv.className = className+' '+className+'-back';
            frontDiv.className = className+' '+className+'-front';
            leftDiv.className = className+' '+className+'-left';
            rightDiv.className = className+' '+className+'-right';
            topDiv.className = className+' '+className+'-top';
            bottomDiv.className = className+' '+className+'-bottom';
        }

        var main = new css3d.element(mainDiv);
        main.setTranslation(0, 0, -translation);
        main.setMatrix(css3dInstance._styleTransform, css3dInstance._styleBackfaceVisibility);
        
        var back = new css3d.element(backDiv);
        back.setBackfaceCulling(true);
        back.setTranslation(0, 0, -translation);
        back.setRotation({x:0, y:1, z:0}, Math.PI);
        back.setMatrix(css3dInstance._styleTransform, css3dInstance._styleBackfaceVisibility);
        
        var front = new css3d.element(frontDiv);
        front.setBackfaceCulling(true);
        front.setTranslation(0, 0, translation);
        front.setMatrix(css3dInstance._styleTransform, css3dInstance._styleBackfaceVisibility);

        var left = new css3d.element(leftDiv);
        left.setBackfaceCulling(true);
        left.setRotation({x:0, y:1, z:0}, -Math.PI/2);
        left.setTranslation(-translation, 0, 0);
        left.setMatrix(css3dInstance._styleTransform, css3dInstance._styleBackfaceVisibility);

        var right = new css3d.element(rightDiv);
        right.setBackfaceCulling(true);
        right.setRotation({x:0, y:1, z:0}, Math.PI/2);
        right.setTranslation(translation, 0, 0);
        right.setMatrix(css3dInstance._styleTransform, css3dInstance._styleBackfaceVisibility);

        var top = new css3d.element(topDiv);
        top.setBackfaceCulling(true);
        top.setRotation({x:1, y:0, z:0}, Math.PI/2);
        top.setTranslation(0, -translation, 0);
        top.setMatrix(css3dInstance._styleTransform, css3dInstance._styleBackfaceVisibility);

        var bottom = new css3d.element(bottomDiv);
        bottom.setBackfaceCulling(true);
        bottom.setRotation({x:1, y:0, z:0}, -Math.PI/2);
        bottom.setTranslation(0, translation, 0);
        bottom.setMatrix(css3dInstance._styleTransform, css3dInstance._styleBackfaceVisibility);

        scene.addElement(main);

        return main;
    },

    /**
     * 
     * @param {DOMElement} container
     * @param {css3d.scene} scene
     * @param {Number} size
     * @param {Integer} tiles
     * @param {String|null} id
     * @param {String|null} className
     * @param {Boolean|null} backfaceCulling
     * @param {Boolean|null} shading
     * @returns {css3d.element} This is the parent element 
     */
    plane : function(container, scene, size, tiles, id, className, backfaceCulling, shading)
    {
        var tileSize = size/tiles;
        var sizeHalf = (size/2);

        var elementGroup = new css3d.element();
        scene.addElement(elementGroup);

        backfaceCulling = (backfaceCulling == null) ? true : backfaceCulling;
        shading = (shading == null) ? true : shading;
        
        var tmp;
        var tmp2;

        // rows
        for (var i=0;i<tiles;i++) {
            // tiles
            for (var j=0;j<tiles;j++) {
                tmp = document.createElement('div');
                tmp.style.position = 'absolute';
                tmp.style.width = tileSize+'px';
                tmp.style.height = tileSize+'px';
                container.appendChild(tmp);
                if (id) {
                    tmp.id = id+'-'+i+'-'+j;
                }
                if (className) {
                    tmp.className = className+' '+className+'-'+i+'-'+j;
                }
                tmp2 = new css3d.element(tmp);
                tmp2.setBackfaceCulling(backfaceCulling);
                tmp2.shading = shading;
                tmp2.setTranslation(-sizeHalf + (j * tileSize), -sizeHalf + (i * tileSize), 0);
                tmp2.inheritScaling = true;
                tmp2.setParent(elementGroup);
                scene.addElement(tmp2);
            }
        }

        return elementGroup;
    },

    /**
     * 
     * @param {DOMElement} container
     * @param {css3d.scene} scene
     * @param {Number} size
     * @param {String|null} id
     * @param {String|null} className
     * @returns {css3d.element} This is the parent element 
     */
    skybox : function(container, scene, size, id, className)
    {
        var translation = (size-2)/2;

        var elementGroup = new css3d.element();

        var backDiv = document.createElement('div');
        backDiv.style.position = 'absolute';
        backDiv.style.width = size+'px';
        backDiv.style.height = size+'px';
        container.appendChild(backDiv);

        var frontDiv = document.createElement('div');
        frontDiv.style.position = 'absolute';
        frontDiv.style.width = size+'px';
        frontDiv.style.height = size+'px';
        container.appendChild(frontDiv);

        var leftDiv = document.createElement('div');
        leftDiv.style.position = 'absolute';
        leftDiv.style.width = size+'px';
        leftDiv.style.height = size+'px';
        container.appendChild(leftDiv);

        var rightDiv = document.createElement('div');
        rightDiv.style.position = 'absolute';
        rightDiv.style.width = size+'px';
        rightDiv.style.height = size+'px';
        container.appendChild(rightDiv);

        var topDiv = document.createElement('div');
        topDiv.style.position = 'absolute';
        topDiv.style.width = size+'px';
        topDiv.style.height = size+'px';
        container.appendChild(topDiv);

        var bottomDiv = document.createElement('div');
        bottomDiv.style.position = 'absolute';
        bottomDiv.style.width = size+'px';
        bottomDiv.style.height = size+'px';
        container.appendChild(bottomDiv);

        if (id) {
            backDiv.id = id+'-back';
            frontDiv.id = id+'-front';
            leftDiv.id = id+'-left';
            rightDiv.id = id+'-right';
            topDiv.id = id+'-top';
            bottomDiv.id = id+'-bottom';
        }
        if (className) {
            backDiv.className = className+' '+className+'-back';
            frontDiv.className = className+' '+className+'-front';
            leftDiv.className = className+' '+className+'-left';
            rightDiv.className = className+' '+className+'-right';
            topDiv.className = className+' '+className+'-top';
            bottomDiv.className = className+' '+className+'-bottom';
        }

        var backfaceCulling = true;
        var shading = false;

        var back = new css3d.element(backDiv);
        back.setBackfaceCulling(backfaceCulling);
        back.shading = shading;
        back.setTranslation(0, 0, -translation);
        back.inheritScaling = true;

        var front = new css3d.element(frontDiv);
        front.setBackfaceCulling(backfaceCulling);
        front.shading = shading;
        front.setTranslation(0, 0, translation);
        front.setRotation({x:0, y:1, z:0}, Math.PI);
        front.inheritScaling = true;

        var left = new css3d.element(leftDiv);
        left.setBackfaceCulling(backfaceCulling);
        left.shading = shading;
        left.setRotation({x:0, y:1, z:0}, Math.PI/2);
        left.setTranslation(-translation, 0, 0);
        left.inheritScaling = true;

        var right = new css3d.element(rightDiv);
        right.setBackfaceCulling(backfaceCulling);
        right.shading = shading;
        right.setRotation({x:0, y:1, z:0}, -Math.PI/2);
        right.setTranslation(translation, 0, 0);
        right.inheritScaling = true;

        var top = new css3d.element(topDiv);
        top.setBackfaceCulling(backfaceCulling);
        top.shading = shading;
        top.setRotation({x:1, y:0, z:0}, -Math.PI/2);
        top.setTranslation(0, -translation, 0);
        top.inheritScaling = true;

        var bottom = new css3d.element(bottomDiv);
        bottom.setBackfaceCulling(backfaceCulling);
        bottom.shading = shading;
        bottom.setRotation({x:1, y:0, z:0}, Math.PI/2);
        bottom.setTranslation(0, translation, 0);
        bottom.inheritScaling = true;

        back.setParent(elementGroup);
        front.setParent(elementGroup);
        left.setParent(elementGroup);
        right.setParent(elementGroup);
        top.setParent(elementGroup);
        bottom.setParent(elementGroup);

        scene.addElement(elementGroup);
        scene.addElement(back);
        scene.addElement(front);
        scene.addElement(left);
        scene.addElement(right);
        scene.addElement(top);
        scene.addElement(bottom);

        return elementGroup;
    },
    
    /**
     * Import an obj file
     * 
     * @param {DOMElement} container
     * @param {css3d.scene} scene
     * @param {String} objFile  Path to obj file
     * @param {String|null} className
     * @param {Boolean|null} backfaceCulling
     * @param {Boolean|null} shading
     * @param {Boolean|null} clockwise  The face winding direction
     * @param {String} textureFile  Path to texture file
     * @param {Integer} textureSize Texture size (The texture has to be a square)
     * @returns {css3d.element} This is the parent element 
     */
    fromObj : function(container, scene, objFile, className, backfaceCulling, shading, clockwise, textureFile, textureSize)
    {

        className = className || 'model';
        backfaceCulling = (backfaceCulling == null) ? true : backfaceCulling;
        shading = (shading == null) ? true : shading;
        clockwise = (clockwise == null) ? false : clockwise;
        textureFile = (textureFile == null) ? '' : textureFile;
        textureSize = (textureSize == null) ? 1024 : textureSize;        

        var objContent = css3d.ajax.getS(objFile);

        var vertices = [];
        var faces = [];
        var colors = [];
        colors[0] = [204, 204, 204];
        var textureCoordinates = [];
        var faceMatches = [];

        var findColors = /c ([0-9]*) ([0-9]*) ([0-9]*)/gim;
        var findVertices = /v ([0-9\-.]*) ([0-9\-.]*) ([0-9\-.]*)/gim;
        //var findFaces1 = /f ([0-9\-.]*).*? ([0-9\-.]*).*? ([0-9\-.]*).*? ([0-9\-.]*)(.*)$/gim;
        var findFaces1 = /f ([0-9\-.]*) ([0-9\-.]*) ([0-9\-.]*) ([0-9\-.]*)(.*)$/gim;
        var findFaces2 = /f ([0-9\-.]*).*?\/([0-9\-.]*).*? ([0-9\-.]*).*?\/([0-9\-.]*).*? ([0-9\-.]*).*?\/([0-9\-.]*).*? ([0-9\-.]*).*?\/([0-9\-.]*)(.*)$/gim;        
        var findFaceColor = /[0-9\/.]* ([0-9])$/;
        var findTextureCoordinates = /vt ([0-9\-.]*) ([0-9\-.]*) ([0-9\-.]*)/gim;

        var matches = false;

        /*
        while (matches = findColors.exec(objContent)) {
            colors.push([parseInt(matches[1]), parseInt(matches[2]), parseInt(matches[3])]);
        }
        */
       
        while (matches = findVertices.exec(objContent)) {
            vertices.push([parseFloat(matches[1])*-1, parseFloat(matches[2]), parseFloat(matches[3])]);
        }
        
        while (matches = findTextureCoordinates.exec(objContent)) {
            textureCoordinates.push([parseFloat(matches[1]), parseFloat(matches[2]), parseFloat(matches[3])]);
        }
 
        var elementGroup = new css3d.element();

        var count = 0;
        
        while (matches = findFaces1.exec(objContent)) {
            faceMatches.push(matches);
        }
        
        while (matches = findFaces2.exec(objContent)) {
            faceMatches.push(matches);
        }

        var i=0
        while (matches = faceMatches[i++]) {
            
            if (matches.length < 5) {
                continue;
            }
       
            if (matches.length >= 9) {
                var f0 = Math.abs(parseInt(matches[1]))-1;
                var f1 = Math.abs(parseInt(matches[3]))-1;
                var f2 = Math.abs(parseInt(matches[5]))-1;
                var f3 = Math.abs(parseInt(matches[7]))-1;
                
                var ft0 = Math.abs(parseInt(matches[2]))-1;
                var ft1 = Math.abs(parseInt(matches[4]))-1;
                var ft2 = Math.abs(parseInt(matches[6]))-1;
                var ft3 = Math.abs(parseInt(matches[8]))-1;
                
                var vt0 = new css3d.vector3(textureCoordinates[ft0][0], textureCoordinates[ft0][1], textureCoordinates[ft0][2]);
                var vt1 = new css3d.vector3(textureCoordinates[ft1][0], textureCoordinates[ft1][1], textureCoordinates[ft1][2]);
                var vt2 = new css3d.vector3(textureCoordinates[ft2][0], textureCoordinates[ft2][1], textureCoordinates[ft2][2]);
                var vt3 = new css3d.vector3(textureCoordinates[ft3][0], textureCoordinates[ft3][1], textureCoordinates[ft3][2]);
            }
            else if (matches.length >= 5) {
                var f0 = Math.abs(parseInt(matches[1]))-1;
                var f1 = Math.abs(parseInt(matches[2]))-1;
                var f2 = Math.abs(parseInt(matches[3]))-1;
                var f3 = Math.abs(parseInt(matches[4]))-1;
            }
                  
            var v0 = new css3d.vector3(vertices[f0][0], vertices[f0][1], vertices[f0][2]);
            var v1 = new css3d.vector3(vertices[f1][0], vertices[f1][1], vertices[f1][2]);
            var v2 = new css3d.vector3(vertices[f2][0], vertices[f2][1], vertices[f2][2]);
            var v3 = new css3d.vector3(vertices[f3][0], vertices[f3][1], vertices[f3][2]);
            
            // get normal    
            var normal = css3d.vector3.prototype.cross(
                css3d.vector3.prototype.sub2(v1, v0),
                css3d.vector3.prototype.sub2(v2, v0)
            ).normalize();
    
            if (!clockwise) {
                normal.x = -normal.x;
                normal.y = -normal.y;
                normal.z = -normal.z;
            }
            
            // build rotation matrix
            var xAxis = css3d.vector3.prototype.cross(normal, css3d.vector3.prototype.sub2(v1, v0).normalize()).normalize();
            var yAxis = css3d.vector3.prototype.cross(normal, xAxis);
            var zAxis = normal;

            var rotationMatrix = [
                xAxis.x, yAxis.x, zAxis.x, 0,
                xAxis.y, yAxis.y, zAxis.y, 0,
                xAxis.z, yAxis.z, zAxis.z, 0,
                0, 0, 0, 1
            ];
           
            // get dimension
            var width = Math.sqrt(Math.pow(v2.x - v1.x, 2) + Math.pow(v2.y - v1.y, 2) + Math.pow(v2.z - v1.z, 2)).toFixed(4);            
            var height = Math.sqrt(Math.pow(v1.x - v0.x, 2) + Math.pow(v1.y - v0.y, 2) + Math.pow(v1.z - v0.z, 2)).toFixed(4);                       

            // get position
            var x = ((v0.x + v1.x + v2.x + v3.x) / 4.0);
            var y = ((v0.y + v1.y + v2.y + v3.y) / 4.0);
            var z = ((v0.z + v1.z + v2.z + v3.z) / 4.0);
 
            // build element
            var div = document.createElement('div');
            div.className = className+' '+className+'-'+count;
            div.style.position = 'absolute';
            div.style.width = width+'px';
            div.style.height = height+'px';
            div.style.backgroundColor = '#ccc';
            
            // texture mapping
            if (matches.length >= 9) {
                var tx0 = vt0.x * textureSize;
                var ty0 = textureSize - (vt0.y * textureSize); 
                var tx1 = vt1.x * textureSize;
                var ty1 = textureSize - (vt1.y * textureSize); 
                var tx2 = vt2.x * textureSize;
                var ty2 = textureSize - (vt2.y * textureSize); 
                var tx3 = vt3.x * textureSize;
                var ty3 = textureSize - (vt3.y * textureSize);
       
                var vWidth = tx3 - tx1;
                if (vWidth < 0) {
                    vWidth = tx1 - tx3;
                    tx1 = tx2;
                }                
                var vHeight = ty3 - ty1;
                if (vHeight < 0) {
                    vHeight = ty1 - ty3;
                    ty1 = ty2;
                }
                
                var scaleX = width/vWidth;
                var scaleY = height/vHeight;
                
                // TODO:
                // there is a problem with texture rotation
                // some elements are 90 or 180 degrees rotated
                div.style.backgroundPosition = (-tx1*scaleX).toFixed(4)+'px '+(-ty1*scaleY).toFixed(4)+'px';
                div.style.backgroundImage = 'url("'+textureFile+'")';
                div.style.backgroundSize = (textureSize*scaleX).toFixed(4)+'px '+(textureSize*scaleY).toFixed(4)+'px';
            }            
            
            container.appendChild(div);
            
            var element = new css3d.element(div);
            element.setBackfaceCulling(backfaceCulling);
            element.shading = shading;
            element.setTranslation(x, y, z);
            element.setRotationMatrix(rotationMatrix);
            element.inheritScaling = true;            
            element.setParent(elementGroup);
            scene.addElement(element);

            count++;
        }        
       
        console.log('obj file loaded. ' + count + ' faces');
        
        elementGroup.setScale(-1, -1, 1);        
        
        scene.addElement(elementGroup);
        
        return elementGroup;
        
    }
    
    



};