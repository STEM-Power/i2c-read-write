/**
 * makecode I2C Read Write Package.
 * From STEM Power Limited.
 * https://stem-power.com
 *  */

/**
 * I2C Read Write block
 */
//% weight=100 color=#BB5A5A icon="\uf0e8" block="I2C Read & Write"
namespace I2C_Read_Write {
    

    /**
     * write a byte to specific register
     * @param addr I2C device address, eg: 80
     * @param reg I2C device register, eg: 1
     * @param dat is the data will be write, eg: 10
     */
    //% blockId="I2C_WriteByte" block="address %addr|register %reg|write byte %dat"
    //% weight=100 blockGap=8
    export function write_byte(addr: number, reg: number, dat: number): void {
        let buf = pins.createBuffer(3);
        buf[0] = reg >> 8;
        buf[1] = reg;
        buf[2] = dat;
        pins.i2cWriteBuffer(addr, buf)
    }

    /**
     * read a byte from specific register in Uint8BE format
     * @param addr I2C device address, eg: 80
     * @param reg I2C device register, eg: 1
     */
    //% blockId="I2C_Read_Uint8BE" block="read byte from address %addr|register %reg"
    //% weight=99 blockGap=8
    export function read_byte_Uint8BE(addr: number, reg: number): number {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt16BE);
        return pins.i2cReadNumber(addr, NumberFormat.UInt8BE);
    }

  /**
     * read a byte from specific register in Uint8LE format
     * @param addr I2C device address, eg: 80
     * @param reg I2C device register, eg: 1
     */
    //% blockId="I2C_Read_Uint8LE" block="read byte from address %addr|register %reg"
    //% weight=98 blockGap=8
    export function read_byte_Uint8LE(addr: number, reg: number): number {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt16BE);
        return pins.i2cReadNumber(addr, NumberFormat.UInt8LE);
    }
    
    /**
     * read a byte from specific register in Int8BE format
     * @param addr I2C device address, eg: 80
     * @param reg I2C device register, eg: 1
     */
    //% blockId="I2C_Read_Int8BE" block="read byte from address %addr|register %reg"
    //% weight=97 blockGap=8
    export function read_byte_Int8BE(addr: number, reg: number): number {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt16BE);
        return pins.i2cReadNumber(addr, NumberFormat.Int8BE);
    }

    /**
     * read a byte from specific register in Int8LE format
     * @param addr I2C device address, eg: 80
     * @param reg I2C device register, eg: 1
     */
    //% blockId="I2C_Read_Int8LE" block="read byte from address %addr|register %reg"
    //% weight=96 blockGap=8
    export function read_byte_Int8LE(addr: number, reg: number): number {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt16BE);
        return pins.i2cReadNumber(addr, NumberFormat.Int8LE);
    }

    /**
     * write 2 bytes to specific register
     * @param addr I2C device address, eg: 80
     * @param reg I2C device register, eg: 2
     * @param dat is the data will be write, eg: 6
     */
    //% blockId="I2C_Write2Bytes" block="address %addr|register %reg|write 2 bytes %dat"
    //% weight=90 blockGap=8
    export function write_2bytes(addr: number, reg: number, dat: number): void {
        let buf = pins.createBuffer(4);
        buf[0] = reg >> 8;
        buf[1] = reg;
        buf[2] = dat >> 8;
        buf[3] = dat;
        pins.i2cWriteBuffer(addr, buf)
    }

    /**
     * read 2 bytes from specific register in Uint16BE format
     * @param addr I2C device address, eg: 80
     * @param reg I2C device register, eg: 2
     */
    //% blockId="I2C_Read2Bytes_Uint16BE" block="read 2 bytes from address %addr|register %reg"
    //% weight=89 blockGap=8
    export function read_2bytes_Uint16BE(addr: number, reg: number): number {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt16BE);
        return pins.i2cReadNumber(addr, NumberFormat.UInt16BE);
    }

    /**
     * read 2 bytes from specific register in Uint16LE format
     * @param addr I2C device address, eg: 80
     * @param reg I2C device register, eg: 2
     */
    //% blockId="I2C_Read2Bytes_Uint16LE" block="read 2 bytes from address %addr|register %reg"
    //% weight=88 blockGap=8
    export function read_2bytes_Uint16LE(addr: number, reg: number): number {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt16BE);
        return pins.i2cReadNumber(addr, NumberFormat.UInt16LE);
    }


    /**
     * read 2 bytes from specific register in Int16BE format
     * @param addr I2C device address, eg: 80
     * @param reg I2C device register, eg: 2
     */
    //% blockId="I2C_Read2Bytes_Int16BE" block="read 2 bytes from address %addr|register %reg"
    //% weight=87 blockGap=8
    export function read_2bytes_Int16BE(addr: number, reg: number): number {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt16BE);
        return pins.i2cReadNumber(addr, NumberFormat.Int16BE);
    }

    /**
     * read 2 bytes from specific register in Int16LE format
     * @param addr I2C device address, eg: 80
     * @param reg I2C device register, eg: 2
     */
    //% blockId="I2C_Read2Bytes_Int16LE" block="read 2 bytes from address %addr|register %reg"
    //% weight=86 blockGap=8
    export function read_2bytes_Int16LE(addr: number, reg: number): number {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt16BE);
        return pins.i2cReadNumber(addr, NumberFormat.Int16LE);
    }


    /**
     * write 4 bytes to specific register
     * @param addr I2C device address, eg: 80
     * @param reg I2C device register, eg: 4
     * @param dat is the data will be write, eg: 7
     */
    //% blockId="I2C_Write4Bytes" block="address %addr|register %reg|write 4 bytes %dat"
    //% weight=80 blockGap=8
    export function write_4bytes(addr: number, reg: number, dat: number): void {
        let buf = pins.createBuffer(6);
        buf[0] = reg >> 8;
        buf[1] = reg;
        buf[2] = dat >> 24;
        buf[3] = dat >> 16;
        buf[4] = dat >> 8;
        buf[5] = dat;
        pins.i2cWriteBuffer(addr, buf)
    }

    /**
     * read 4 bytes from specific register in Uint32BE format
     * @param addr I2C device address, eg: 80
     * @param reg I2C device register, eg: 4
     */
    //% blockId="I2C_Read4Bytes_Uint32BE" block="read 4 bytes from address %addr|register %reg"
    //% weight=79 blockGap=8
    export function read_4bytes_Uint32BE(addr: number, reg: number): number {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt16BE);
        return pins.i2cReadNumber(addr, NumberFormat.UInt32BE);
    }

    /**
     * read 4 bytes from specific register in Uint32LE format
     * @param addr I2C device address, eg: 80
     * @param reg I2C device register, eg: 4
     */
    //% blockId="I2C_Read4Bytes_Uint32LE" block="read 4 bytes from address %addr|register %reg"
    //% weight=78 blockGap=8
    export function read_4bytes_Uint32LE(addr: number, reg: number): number {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt16BE);
        return pins.i2cReadNumber(addr, NumberFormat.UInt32LE);
    }
 /**
     * read 4 bytes from specific register in Int32BE format
     * @param addr I2C device address, eg: 80
     * @param reg I2C device register, eg: 4
     */
    //% blockId="I2C_Read4Bytes_Int32BE" block="read 4 bytes from address %addr|register %reg"
    //% weight=77 blockGap=8
    export function read_4bytes_Int32BE(addr: number, reg: number): number {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt16BE);
        return pins.i2cReadNumber(addr, NumberFormat.Int32BE);
    }

    /**
     * read 4 bytes from specific register in Int32LE format
     * @param addr I2C device address, eg: 80
     * @param reg I2C device register, eg: 4
     */
    //% blockId="I2C_Read4Bytes_Int32LE" block="read 4 bytes from address %addr|register %reg"
    //% weight=76 blockGap=8
    export function read_4bytes_Int32LE(addr: number, reg: number): number {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt16BE);
        return pins.i2cReadNumber(addr, NumberFormat.Int32LE);
    }
}
