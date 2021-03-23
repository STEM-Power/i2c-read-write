/**
 * makecode I2C Read Write Package.
 * From microbit/micropython Chinese community.
 * http://www.micropython.org.cn
 */

/**
 * I2C Read Write block
 */
//% weight=100 color=#BB5A5A icon="\uf2db" block="I2C Read & Write"
namespace I2C_Read_Write {
    let AT24_I2C_ADDR = 80;

    /**
     * write a byte to special register
     * @param I2C device address, eg: 80
     * @param I2C device register, eg: 1
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
     * read a byte from special register
     * @param I2C device address, eg: 80
     * @param I2C device register, eg: 1
     */
    //% blockId="I2C_ReadByte" block="read byte from address %addr|register %reg"
    //% weight=99 blockGap=8
    export function read_byte(addr: number, reg: number): number {
        pins.i2cWriteNumber(addr, addr, NumberFormat.UInt16BE);
        return pins.i2cReadNumber(addr, NumberFormat.UInt8BE);
    }

    /**
     * write a 2 bytes to special register
     * @param I2C device address, eg: 80
     * @param I2C device register, eg: 2
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
     * read a 2 bytes from special register
     * @param I2C device address, eg: 80
     * @param I2C device register, eg: 2
     */
    //% blockId="I2C_Read2Bytes" block="read 2 bytes from address %addr|register %reg"
    //% weight=89 blockGap=8
    export function read_2bytes(addr: number, reg: number): number {
        pins.i2cWriteNumber(addr, addr, NumberFormat.UInt16BE);
        return pins.i2cReadNumber(addr, NumberFormat.UInt16BE);
    }

    /**
     * write a 4 bytes to special register
     * @param I2C device address, eg: 80
     * @param I2C device register, eg: 4
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
     * read a 4 bytes from special register
     * @param I2C device address, eg: 80
     * @param I2C device register, eg: 4
     */
    //% blockId="I2C_Read4Bytes" block="read 4 bytes from address %addr|register %reg"
    //% weight=79 blockGap=8
    export function read_4bytes(addr: number, reg: number): number {
        pins.i2cWriteNumber(addr, addr, NumberFormat.UInt16BE);
        return pins.i2cReadNumber(addr, NumberFormat.Int32BE);
    }
}