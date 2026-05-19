from PIL import Image

def make_transparent():
    img = Image.open('public/images/logo.png')
    img = img.convert("RGBA")
    
    datas = img.getdata()
    newData = []
    
    # Threshold for white background
    threshold = 240
    
    for item in datas:
        # If pixel is close to white, make it transparent
        if item[0] >= threshold and item[1] >= threshold and item[2] >= threshold:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save('public/images/logo.png', "PNG")

if __name__ == '__main__':
    make_transparent()
